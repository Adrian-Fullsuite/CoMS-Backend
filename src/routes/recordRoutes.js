import express from "express";
const router = express.Router();

import {
  createRecord,
  getAllRecords,
  updateRecord,
  deleteRecord,
} from "../controllers/recordController.js";

router.route("/record/").post(createRecord).get(getAllRecords);
router.route("/record/:id").patch(updateRecord).delete(deleteRecord);

export default router;
