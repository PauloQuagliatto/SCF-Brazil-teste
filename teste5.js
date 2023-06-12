var data = require("./fakeData");

module.exports = function(req, res) {
  const { name } = req.query;
  const user = data.find(d => d.name === name);

  if (user)
    res.send(`Usuário ${name} foi lido ${!!user.read ? user.read : 0} vezes.`);
};
