import mongoose from "mongoose";
import studentModel from "./models/students.js";
import dotenv from "dotenv";
dotenv.config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const environment = async () => {
  await mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.1k06imr.mongodb.net/${dbName}?retryWrites=true&w=majority`
  );

  // 1. Obtener cantidad de estudiantes aprobados y reprobados.
  // El estudiante debe tener una calificación mayor a 3.0 para ser aprobado
  const studentsByGrade = await studentModel.aggregate([
    {
      $addFields: {
        approved: {
          $cond: { if: { $gte: ["$grade", 3.0] }, then: "pass", else: "fail" },
        },
      },
    },
    {
      $group: { _id: "$approved", count: { $sum: 1 } },
    },
  ]);
  console.log(studentsByGrade);

  // 2. Obtener estudiantes agrupados por grupo
  const studentsByGroup = await studentModel.aggregate([
    { $group: { _id: "$group", students: { $sum: 1 } } },
    { $sort: { _id: 1 } },
  ]);
  console.log(studentsByGroup);

  // 3. y 4. Obtener promedio de calificaciones de los estudiantes por  grupo
  const studentsAvgByGroup = await studentModel.aggregate([
    {
      $group: {
        _id: "$group",
        studentsAvg: { $avg: "$grade" },
      },
    },
    { $sort: { _id: 1 } },
    { $project: { _id: "$_id", roundedAvg: { $round: ["$studentsAvg", 2] } } },
  ]);
  console.log(studentsAvgByGroup);

  // 5. Obtener el promedio general de los estudiantes
  const studentAvg = await studentModel.aggregate([
    { $group: { _id: "Students", generalAvg: { $avg: "$grade" } } },
    { $project: { _id: "$_id", roundedAvg: { $round: ["$generalAvg", 2] } } },
  ]);
  console.log(studentAvg);

  // 6. y 7 Obtener promedio por genero
  const studentAvgByGender = await studentModel.aggregate([
    { $group: { _id: "$gender", studentAvg: { $avg: "$grade" } } },
    { $project: { _id: "$_id", roundedAvg: { $round: ["$studentAvg", 2] } } },
  ]);
  console.log(studentAvgByGender);
};

environment();
