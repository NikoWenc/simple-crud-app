import { Router } from "express";

const router = Router();

// Example route
router.get("/", (req, res) => {
  res.send("User route is working!");
});
router.post("/addUser", (req, res) => {
  const { name, email } = req.body;
  // Here you would typically add the user to your database
  res.send(`User ${name} with email ${email} added successfully!`);
});

export default router;
