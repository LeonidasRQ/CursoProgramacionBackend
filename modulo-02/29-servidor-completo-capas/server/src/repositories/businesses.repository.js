import { businessDao } from "../dao/index.js";

export default class BusinessRepository {
  getBusinesses = async function () {
    try {
      const businesses = await businessDao.getBusinesses();
      return businesses;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  getBusinessById = async function (id) {
    try {
      const business = await businessDao.getBusinessById(id);
      return business;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  createBusiness = async function (business) {
    try {
      const result = await businessDao.createBusiness(business);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  addProduct = async function (businessId, product) {
    try {
      const result = await businessDao.addProduct(businessId, product);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
