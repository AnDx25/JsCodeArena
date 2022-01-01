public ActionResult ProcessV2IMEIValidationProcess(string data, string stateCodeData)
{

			m_strLogMessage.AppendFormat("[" + Session["LoginUser"] + "]" + " [Method] [MerchantController.ProcessV2IMEIValidationProcess] called");
			string returnMessage = "#ERROR: " + MultiLingualClassLibrary.Resources.ErrorThisTimeTryAfterSomeTime;
			try
			{
				m_strLogMessage.AppendFormat("data received for IMEI Validation: {0}", data);
				v2IMEIRequestWithoutEnum objv2IMEIRequest = new v2IMEIRequestWithoutEnum();
  				int merchantId = int.Parse(Convert.ToString(Session["MerchantId"]));
				DataSet srv_dsMerchantInfoDS = _wcfInstantFactory.ObjMerchantConsoleWCFService.GetRegisteredMerchantInfo(merchantId);
				if (srv_dsMerchantInfoDS == null || srv_dsMerchantInfoDS.Tables == null || srv_dsMerchantInfoDS.Tables.Count == 0 || srv_dsMerchantInfoDS.Tables[0].Rows == null || srv_dsMerchantInfoDS.Tables[0].Rows.Count == 0)
				{
					m_strLogMessage.AppendFormat("#ERROR: " + MultiLingualClassLibrary.Resources.MerchantDetailsNotFoundContact);
					LogMessage.LogInfoMessage(m_strLogMessage);
				}
				else
				{
					v2IMEIResponse objIMEIValidationResponse = null;
					string merchantAccessCode = Convert.ToString(srv_dsMerchantInfoDS.Tables[0].Rows[0]["ACCESS_CODE"]);
					string secureSecret = Convert.ToString(srv_dsMerchantInfoDS.Tables[0].Rows[0]["SECURE_SECRET"]);
					objv2IMEIRequest.imeiRequestType = "BLOCKING";
					objv2IMEIRequest.merchantData.merchantId = merchantId;
					objv2IMEIRequest.merchantData.merchantAccessCode = merchantAccessCode;
					string strRequest = JsonConvert.SerializeObject(objv2IMEIRequest);
					string PinePGV2IMEIValidationServiceUrl = string.Empty;
					if (ConfigurationManager.AppSettings.AllKeys.Contains("PinePGV2IMEIValidationServiceUrl"))
					{
						PinePGV2IMEIValidationServiceUrl = Convert.ToString(ConfigurationManager.AppSettings["PinePGV2IMEIValidationServiceUrl"]);
						m_strLogMessage.AppendFormat("PinePGV2IMEIValidationServiceUrl is {0} : ", PinePGV2IMEIValidationServiceUrl);
					}
					else
					{
						objIMEIValidationResponse.responseCode = -1;
						objIMEIValidationResponse.responseMsg = "PinePGV2IMEIValidationServiceUrl key is not present in appsettings.";
						m_strLogMessage.Append("PinePGV2IMEIValidationServiceUrl key is not present in appsettings.");
						LogMessage.LogInfoMessage(m_strLogMessage);
					}

					RestWebClient restClient = new RestWebClient();
					string strPGResponse = restClient.CallNewPostMethod(PinePGV2IMEIValidationServiceUrl, strRequest, 1);
					objIMEIValidationResponse = JsonConvert.DeserializeObject<v2IMEIResponse>(strPGResponse);
					if(objIMEIValidationResponse != null && objIMEIValidationResponse.v2IMEIProductDetails != null && objIMEIValidationResponse.v2IMEIProductDetails.Count > 0)
					{
						returnMessage = "";
						foreach (var response in objIMEIValidationResponse.v2IMEIProductDetails)
						{
							if (response.productImeiWiseResponse != null)
							{
								returnMessage = returnMessage + response.merchantProductCode + "|" + response.productImeiWiseResponse.responseMsg + ",";
							}
							else
							{
								returnMessage = returnMessage + response.merchantProductCode + "|null,";
							}
						}
					}
					else
					{
						returnMessage = objIMEIValidationResponse.responseMsg;
					}
					m_strLogMessage.Append("Response received from IMEI Validation v2 is: " + strPGResponse);
					LogMessage.LogInfoMessage(m_strLogMessage);

					//state code logging
					bool status = false;
					StateCodeDataRequest objStateCodeData = new StateCodeDataRequest();
					objStateCodeData = JsonConvert.DeserializeObject<StateCodeDataRequest>(stateCodeData);
					if(objStateCodeData != null && objStateCodeData.lsStateCodeInnerData.Count > 0)
					{
						foreach(var innerStateCodeData in objStateCodeData.lsStateCodeInnerData)
						{
							status = _wcfInstantFactory.ObjMerchantConsoleWCFService.SaveStateCodeAfterIMEIValidation(merchantId, objStateCodeData.txnId, objStateCodeData.programTypeId, innerStateCodeData.count, innerStateCodeData.stateCode);
						}
					}
					if (status)
					{
						m_strLogMessage.Append("State code logged successfully");
					}
					else
					{
						m_strLogMessage.Append("Error in saving state code");
					}
					LogMessage.LogInfoMessage(m_strLogMessage);
				}
			}
			catch (Exception ex)
			{
				m_strLogMessage.AppendFormat(ex.ToString());
				LogMessage.LogErrorMessage(m_strLogMessage);
			}
			return Content(returnMessage);
		}
}