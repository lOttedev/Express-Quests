const users = [
  {
    id: 1,
    firstname: "Bob",
    lastname: "l'éponge",
    age: "22",
  },
  {
    id: 2,
    firstname: "Patrick",
    lastname: "l'étoile de mer",
    age: "25",
  },
  {
    id: 3,
    firstname: "Carlos",
    lastname: "le poulpe",
    age: "45",
  },
];

const getUsers = (req, res) => {
  res.status(200).json(users);
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find((user) => user.id === id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send("User Not Found");
  }
};

module.exports = {
  getUsers,
  getUserById,
};
