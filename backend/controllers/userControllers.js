import User from "../models/User.js";

// Controller function to add a new user
export const addUser = async (req, res) => {
  try {
    const { email } = req.body;
    const newUser = new User(req.body);

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: "Error adding user", error });
  }
};
