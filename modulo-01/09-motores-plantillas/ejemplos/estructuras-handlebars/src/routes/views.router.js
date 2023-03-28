import { Router } from "express";

const router = Router();

const food = [
  {
    name: "spaguetti",
    price: 5,
  },
  {
    name: "tuna",
    price: 3.5,
  },
  {
    name: "apple",
    price: 1.3,
  },
  {
    name: "egg",
    price: 0.5,
  },
  {
    name: "rice",
    price: 2.5,
  },
];

const testUser = {
  name: "Emily",
  lastName: "Quiroga",
  age: 20,
  email: "emq@gmail.com",
  phone: "321012642",
  role: "admin",
};

router.get("/", (req, res) => {
  res.render("index", {
    user: testUser,
    style: "index.css",
    isAdmin: testUser.role === "admin",
    food,
  });
});

export default router;
