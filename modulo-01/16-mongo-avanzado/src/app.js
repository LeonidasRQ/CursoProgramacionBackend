import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import { userModel } from "./models/users.js";
import studentModel from "./models/students.js";
import courseModel from "./models/courses.js";

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const student = {
  first_name: "Hilda",
  last_name: "Coruño",
  email: "hilda@correo.com",
  gender: "Female",
};

const course = {
  title: "Curso de Backend",
  description:
    "Es un curso en donde aprenderas a hacer servidores bonitos y muchas referencias de los Simpson",
  difficulty: 5,
  topics: ["JavaScript", "handlebars", "Sockets", "Servidores"],
  professor: "Leonidas",
};

const environment = async () => {
  await mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.1k06imr.mongodb.net/${dbName}?retryWrites=true&w=majority`
  );

  // Ejemplo de Indexación
  let response = await userModel
    .find({ first_name: "Celia" })
    .explain("executionStats");
  console.log(response);

  // Ejemplo de Populate

  // 1. Creamos un estudiante en la base de datos
  await studentModel.create(student);

  // 2. Creamos un curso en la base de datos
  await courseModel.create(course);

  // 3. Agregamos el curso recian creado dentro de la propiedad "courses" del estudiante que recien creamos
  await studentModel.updateOne(
    { _id: "642ce9b7f2953920c844b373" },
    { $addToSet: { courses: ["642cddfeaa23c26f946c4f09"] } }
  );

  // 4. Traemos desde la base de datos el estudiante actualizado con el nuevo curso
  // Recuerda que aquí estamos populando la propiedad de "courses" con ayuda del middleware que creamos en el modelo "students.js"
  let populatedStudent = await studentModel.findOne({
    _id: "642ce9b7f2953920c844b373",
  });

  // 5. Aquí podrás ver en tu consola el estudiante con su propiedad "courses" populada
  console.log(populatedStudent);
};

environment();
