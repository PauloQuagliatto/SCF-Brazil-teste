var data = require("./fakeData");

module.exports = function(req, res) {
  const { name } = req.query;
  const previousLength = data.length;

  data = data.filter((d) => d.name !== name);

  if (data.length < previousLength);
    res.send("success");
};
