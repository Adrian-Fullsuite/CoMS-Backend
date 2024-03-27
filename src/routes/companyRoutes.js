import express from "express";
const router = express.Router();

import {
  createCompany,
  getAllCompany,
  updateCompany,
  deleteCompany,
  getCompany,
} from "../controllers/companyController.js";

router.route("/company/").post(createCompany).get(getAllCompany);
router
  .route("/company/:id")
  .get(getCompany)
  .patch(updateCompany)
  .delete(deleteCompany);

export default router;
