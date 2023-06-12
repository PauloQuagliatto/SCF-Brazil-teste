var data = require("./fakeData");

module.exports = function middleware(req, res, next) {
  const userId = req.headers["user-id"];
  const { permissions } = data.find(d => d.id === Number(userId))

  if (!permissions)
    return res.send("Sem permissao");

  const { path } = req.route;
  const [_, rootPath] = path.split("/");
  if (permissions.includes(rootPath))
    return next();

  return res.send("Sem permissao");
}
