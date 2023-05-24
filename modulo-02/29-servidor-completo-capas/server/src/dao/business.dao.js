import { businessModel } from "./models/business.model.js";

export default class Business {
  getBusinesses = async function () {
    try {
      const businesses = await businessModel.find();
      return businesses;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  getBusinessById = async function (id) {
    try {
      const business = await businessModel.findOne({ _id: id });
      return business;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  createBusiness = async function (business) {
    try {
      const result = await businessModel.create(business);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  addProduct = async function (businessId, product) {
    try {
      const result = await businessModel.updateOne(
        { _id: businessId },
        { $addToSet: { products: product } }
      );

      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
