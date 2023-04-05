import mongoose from "mongoose";

const coursesCollection = "courses";

const coursesSchema = mongoose.Schema({
  title: String,
  description: String,
  difficulty: Number,
  topics: {
    type: Array,
    default: [],
  },
  professor: String,
  students: {
    type: Array,
    default: [],
  },
});

const courseModel = mongoose.model(coursesCollection, coursesSchema);

export default courseModel;
