import mongoose from "mongoose";

const studentCollection = "estudiantes";

const studentSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  curso: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  sexo: {
    type: String,
    required: true,
  },
});

export const studentModel = mongoose.model(studentCollection, studentSchema);
