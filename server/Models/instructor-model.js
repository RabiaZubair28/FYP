import mongoose from "mongoose";
const instructorSchema = new mongoose.Schema({
  instructorId: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  cnicNumber: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  city: {
    type: String,
  },
  districtOfDomicile: {
    type: String,
  },
  province: {
    type: String,
  },
  religion: {
    type: String,
  },
  officeNumber: {
    type: String,
  },
  officeLocation: {
    type: String,
  },
  designation: {
    type: String,
  },
  role: {
    type: String,
  },
});

const Instructor = new mongoose.model("Instructor", instructorSchema);

export default Instructor;
