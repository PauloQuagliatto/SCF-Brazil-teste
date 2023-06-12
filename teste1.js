var data = require("./fakeData");

const getUser = (req, res, next) => {
  const { name } = req.query;
  const index = data.findIndex(dataItem => dataItem.name === name);

  if (index === -1)
    return next(new Error("Nome não encontrado"))

  data[index].read = !!data[index].read ? data[index].read + 1 : 1;

  const { read, ...user } = data[index];

  return res.send(user);
};

const getUsers = (req, res, next) => {
  const users = data.map((item) => {
    const { read, ...rest } = item
    return rest
  })

  res.send(users);
};

module.exports = {
  getUser,
  getUsers
};
