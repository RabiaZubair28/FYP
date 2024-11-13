// authController.js

import fs from "fs";
import path from "path";

const usersFilePath = path.join(process.cwd(), "Credentials", "users.json");
import Instructor from "../Models/instructor-model.js";
import Research from "../Models/research-model.js";
// Function to read the users.json file and parse it
const getUsers = () => {
  try {
    const data = fs.readFileSync(usersFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading users file:", error);
    return [];
  }
};
// Login Controller
export const login = (req, res) => {
  const { userID, password } = req.body;
  console.log("Received login request:", { userID, password }); // Log the received data

  // Get the list of users
  const users = getUsers();

  // Find the user with matching userID
  const user = users.find((u) => u.userID === userID);

  // If user not found
  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials" });
  }

  // If password does not match
  if (user.password !== password) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials" });
  }

  // If authentication is successful, send the user role
  return res.status(200).json({
    success: true,
    message: "Login successful",
    role: user.role,
  });
};
export const instructor = async (req, res) => {
  try {
    console.log(req.body);
    const {
      instructorId,
      firstName,
      lastName,
      email,
      gender,
      cnicNumber,
      contactNumber,
      dateOfBirth,
      city,
      districtOfDomicile,
      province,
      religion,
      officeNumber,
      officeLocation,
      designation,
      role,
    } = req.body;

    const instructorCreated = await Instructor.create({
      firstName,
      lastName,
      email,
      gender,
      cnicNumber,
      contactNumber,
      dateOfBirth,
      city,
      districtOfDomicile,
      province,
      religion,
      officeNumber,
      officeLocation,
      designation,
      role,
    });

    res.status(201).json({
      msg: "instructor making successful",
    });
  } catch (error) {
    res
      .status(500)
      .json("internal server error, instructor making unsuccessful");
    next(error);
  }
};
export const instructorById = async (req, res) => {
  try {
    const instructorId = req.params.id; // Get the ID from URL parameter
    const instructor = await Instructor.findById(instructorId); // Fetch instructor by ID

    if (!instructor) {
      return res.status(404).json({ msg: "Instructor not found" });
    }

    res.status(200).json(instructor); // Return instructor data
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};
export const research = async (req, res) => {
  try {
    const { paperId, paperTitle, ResearchGateLink, instructorId } = req.body;

    // Validate if instructorId exists in the Instructor collection
    const instructor = await Instructor.findById(instructorId);
    if (!instructor) {
      return res.status(400).json({ msg: "Instructor not found" });
    }

    // Create the research paper
    const researchCreated = await Research.create({
      paperId,
      paperTitle,
      ResearchGateLink,
      instructorId,
    });

    // Send success response
    res.status(201).json({
      msg: "Research Added successfully",
      research: researchCreated, // Optionally return the created research paper
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "Internal server error, research add unsuccessful" });
  }
};
export const researchById = async (req, res) => {
  try {
    const yourInstructorId = req.params.id; // Get the ID from URL parameter
    const research = await Research.find({
      instructorId: yourInstructorId,
    }); // Fetch instructor by ID

    if (!research) {
      return res.status(404).json({ msg: "Research not found" });
    }

    res.status(200).json(research); // Return instructor data
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};
