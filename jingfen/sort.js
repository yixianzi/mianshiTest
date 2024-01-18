const d = require("./data");

const nd = d.data.provincialOperationData;
const sort = [];
for (let i = 0; i < nd.increaseNum.length; i++) {
  sort.push({
    increaseNum: Number(nd.increaseNum[i]),
    lastIncome: nd.lastIncome[i],
    abscissa: nd.abscissa[i],
    localIncome: nd.localIncome[i],
  });
}
const re = sort.sort((a, b) => b.increaseNum - a.increaseNum);
