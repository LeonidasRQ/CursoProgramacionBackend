const toys = [
  {
    name: "terreneitor",
    price: 250,
  },
];

export function getToys(req, res) {
  res.send(toys);
}

export function createToy(req, res) {
  const toy = req.body;
  toys.push(toy);
  res.send({ status: "success", message: "toy created", payload: toy });
}
