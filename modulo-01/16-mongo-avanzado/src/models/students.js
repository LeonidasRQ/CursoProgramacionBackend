import mongoose from "mongoose";

const studentsCollection = "students";

const studentsSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "courses",
    },
  ],
});

/**
 * Mongoose middleware:
 * Aquí le decimos a mongoose que cada vez que alguien utilice la función "findOne"
 * con el modelo "students", entonces aplique un populate sobre la propiedad "courses"
 */
studentsSchema.pre("findOne", function () {
  this.populate("courses");
});

const studentModel = mongoose.model(studentsCollection, studentsSchema);

export default studentModel;
