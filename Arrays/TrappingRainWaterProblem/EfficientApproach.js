import maxValue from "../../Utils/Max.js";
import minValue from "../../Utils/Min.js";
const efficientTrapWaterSolution = (bars = []) => {
  const length = bars.length;
  let maximumWater = 0;
  //Finding lMax
  let leftMaxBar = [];
  leftMaxBar[0] = bars[0];
  for (let index = 1; index < bars.length; index++) {
    leftMaxBar[index] = maxValue(leftMaxBar[index - 1], bars[index]);
  }
  let rightMaxBar = [];
  rightMaxBar[length - 1] = bars[length - 1];
  for (let index = length - 2; index >= 0; index--) {
    rightMaxBar[index] = maxValue(rightMaxBar[index + 1], bars[index]);
  }
  for (let index = 1; index < length - 1; index++) {
    maximumWater = maximumWater + (minValue(leftMaxBar[index], rightMaxBar[index]) - bars[index]);
  }
  return maximumWater;
};
export default efficientTrapWaterSolution;
