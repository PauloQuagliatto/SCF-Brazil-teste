var data = require("./fakeData");

module.exports = function(req, res) {
  const { name, job, permissions } = req.body;

  const newUser = {
    id: data.length + 1,
    name,
    job,
    permissions
  }

  data.push(newUser)
  return res.send(newUser);
};
