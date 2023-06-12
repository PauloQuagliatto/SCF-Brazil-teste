var data = require("./fakeData");

module.exports = function(req, res) {
  const { id } = req.query;
  const { name, job } = req.body;

  const reg = data.find(d => d.id == id);

  if (!reg)
    return

  reg.name = name;
  reg.job = job
  data = data.map((dataItem) => {
    return dataItem.id === id ? reg : dataItem
  })

  res.send(reg);
};
