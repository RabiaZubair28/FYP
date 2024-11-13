import mongoose from "mongoose";
const { Schema } = mongoose;
const researchSchema = new mongoose.Schema({
  paperId: {
    type: String,
  },
  paperTitle: {
    type: String,
  },
  ResearchGateLink: {
    type: String,
  },
  instructorId: {
    type: Schema.Types.ObjectId,
    ref: "Instructor", // This refers to the Instructors model
    required: true,
  },
});

const Research = new mongoose.model("Research", researchSchema);

export default Research;
