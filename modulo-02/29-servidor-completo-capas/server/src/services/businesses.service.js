import { businessRepository } from "../repositories/index.js";

export default class BusinessService {
  getBusinesses = async function () {
    try {
      const businesses = await businessRepository.getBusinesses();
      return businesses;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  getBusinessById = async function (id) {
    try {
      const business = await businessRepository.getBusinessById(id);
      return business;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  createBusiness = async function (business) {
    try {
      const result = await businessRepository.createBusiness(business);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  /**
   * En este metodo podriamos agregar una validación sobre la logica de negocio.
   * Verificar que no se inserten productos duplicados dentro de un negocio.
   *
   * Podriamos llamar un metodo getProductById() utilizando el businessesRepository
   * para verificar sí el producto que se está intentando insertar ya se encuentra
   * dentro del negocio.
   *
   * Sí el producto ya existe, podriamos retornar un error informando que el producto
   * ya está registrado.
   *
   * Sí el producto no existe dentro del negocio, podriamos continuar con el registro normal.
   */

  addProduct = async function (businessId, product) {
    try {
      const result = await businessRepository.addProduct(businessId, product);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
