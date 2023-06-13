export default class CustomError {
  static generateCustomError({ name, message, cause }) {
    const customError = new Error(message, { cause });
    customError.name = name;
    throw customError;
  }
}
