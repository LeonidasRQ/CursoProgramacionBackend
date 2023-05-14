let toys = [
  {
    name: "Terreneitor",
    price: 250,
  },
];

export const toyController = {
  getToys(req, res) {
    res.send(toys);
  },

  createToy(req, res) {
    const toy = req.body;
    toys.push(toy);
    res.send({ status: "success", message: "toy created", payload: toy });
  },
};
