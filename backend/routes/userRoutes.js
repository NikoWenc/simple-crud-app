import { Router } from "express";
import {
  getUsers,
  addUser,
  editUser,
  deleteUser,
  getUserById,
} from "../controllers/userControllers.js";

const router = Router();

// Example route
router.get("/users", getUsers);
router.get("/user/:id", getUserById);
router.post("/addUser", addUser);
router.put("/editUser/user/:id", editUser);
router.delete("/deleteUser/user/:id", deleteUser);

export default router;
