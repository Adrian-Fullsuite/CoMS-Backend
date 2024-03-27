import express from "express";
const router = express.Router();

import {
  createAccount,
  getAllAccounts,
  updateAccount,
  deleteAccount,
} from "../controllers/accountController.js";

router.route("/account/").post(createAccount).get(getAllAccounts);
router.route("/account/:id").patch(updateAccount).delete(deleteAccount);

export default router;
