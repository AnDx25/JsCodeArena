import maxValue from "../../Utils/Max.js";
import minValue from "../../Utils/Min.js";
const naiveTrapWaterSolution = (bars = []) => {
  let maximumWater = 0;
  for (let currentBarIndex = 1; currentBarIndex < bars.length - 1; currentBarIndex++) {
    //Identifying Max Bar height on left of current bar
    let leftMaxBar = bars[currentBarIndex];
    for (let left = 0; left < currentBarIndex; left++) {
      leftMaxBar = maxValue(leftMaxBar, bars[left]);
    }
    //Identifying Max Bar height on right of current bar
    let rightMaxBar = bars[currentBarIndex];
    for (let right = currentBarIndex; right < bars.length; right++) {
      rightMaxBar = maxValue(rightMaxBar, bars[right]);
    }
    //calculating result
    maximumWater += minValue(leftMaxBar, rightMaxBar) - bars[currentBarIndex];
  }
  return maximumWater;
};
export default naiveTrapWaterSolution;
