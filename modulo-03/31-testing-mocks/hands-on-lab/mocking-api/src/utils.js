import { faker } from "@faker-js/faker/locale/es";

export const generateUser = (role) => {
  let numOfProducts = faker.number.int({ min: 0, max: 15 });

  let products = [];

  for (let i = 0; i < numOfProducts; i++) {
    products.push(generateProduct());
  }

  return {
    id: faker.database.mongodbObjectId(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    job: faker.person.jobTitle(),
    sex: faker.person.sex(),
    image: faker.internet.avatar(),
    birthDate: faker.date.birthdate(),
    premium: faker.datatype.boolean(),
    role,
    products,
  };
};

export const generateProduct = () => {
  return {
    id: faker.database.mongodbObjectId(),
    code: faker.string.alphanumeric(8),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    department: faker.commerce.department(),
    stock: faker.number.int({ min: 0, max: 100 }),
    image: faker.image.url(),
  };
};
