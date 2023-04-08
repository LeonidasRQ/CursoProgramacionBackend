import mongoose from "mongoose";
import orderModel from "./models/orders.js";
import dotenv from "dotenv";
dotenv.config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const environment = async () => {
  await mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.1k06imr.mongodb.net/${dbName}?retryWrites=true&w=majority`
  );

  // Ejemplo 1: aggregate
  const orders = await orderModel.aggregate([
    { $match: { size: "medium" } },
    { $group: { _id: "$flavor", totalQuantity: { $sum: "$quantity" } } },
    { $sort: { totalQuantity: -1 } },
    { $group: { _id: 1, orders: { $push: "$$ROOT" } } },
    { $project: { _id: 0, orders: "$orders" } },
    { $merge: { into: "reports" } },
  ]);

  console.log(JSON.stringify(orders, null, "\t"));

  // Ejemplo 2: pagination
  const paginatedOrders = await orderModel.paginate(
    { size: "medium" },
    { limit: 5, page: 1 }
  );
  console.log(paginatedOrders);
};

environment();
