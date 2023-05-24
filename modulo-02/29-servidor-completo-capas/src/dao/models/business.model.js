import mongoose from "mongoose";

const businessCollection = "Businesses";

const businessSchema = mongoose.Schema({
  name: String,
  products: [],
});

export const businessModel = mongoose.model(businessCollection, businessSchema);
