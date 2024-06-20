import express from "express";
import {
  createProfile,
  viewProfile,
  updateProfile,
  deleteProfile,
  getAllUsers,
  updateUser,
  getUser,
} from "../controllers/user_controller.js";
const router = express.Router();

router.post("/create-user", createProfile);
router.get("/profile/:id", viewProfile);
router.patch("/profile/update/:id", updateProfile);
router.delete("/profile/remove/:id", deleteProfile);
router.get("/users", getAllUsers);
router.get("/user/:id", getUser);
router.patch("/users/:user_id", updateUser);

export default router;
