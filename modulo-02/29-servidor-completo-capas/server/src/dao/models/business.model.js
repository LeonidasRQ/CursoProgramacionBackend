import mongoose from "mongoose";

const businessCollection = "Businesses";

const businessSchema = new mongoose.Schema({
  name: String,
  products: [],
});

export const businessModel = mongoose.model(businessCollection, businessSchema);
