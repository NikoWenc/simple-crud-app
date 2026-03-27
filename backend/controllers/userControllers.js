import User from "../models/userModel.js";

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

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

export const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userExists = await User.findById(id);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error editing user", error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
};

export const getUsersByName = async (req, res) => {
  try {
    const { username } = req.params;
    const searchRes = await User.find({ username });
    if (!searchRes) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(searchRes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
};
