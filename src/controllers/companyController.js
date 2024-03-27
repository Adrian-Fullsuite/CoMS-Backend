import db from "../database/db.js";
import { sanitizeObject } from "../utils/sanitize.js";
import cloudinary from "../utils/cloudinary.js";

const uploadImage = async (imagePath, company_name) => {
  // Upload image to Cloudinary
  try {
    console.log("Image Path: ", imagePath);
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: "Tsekpay/Companies/Logos",
      public_id: company_name,
      overwrite: true,
    });

    fs.unlinkSync(imagePath);
    return result;
  } catch (error) {
    console.log("Error: ", error);
  }
};

const getAllCompany = async (req, res) => {
  const { rows } = await db.query("SELECT * FROM company");
  if (rows) {
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
};
const createCompany = async (req, res) => {
  const { companyName, logo, secNumber } = req.body;
  const result = db.query(
    "INSERT INTO company (companyName, logo, secNumber) Values($1, $2, $3)",
    [companyName, logo, secNumber]
  );
  result
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
};

const getCompany = async (req, res) => {
  const { id } = req.params;
  const { rows } = await db.query("SELECT * FROM company WHERE ID = $1", [id]);
  if (rows) {
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
};

const updateCompany = async (req, res) => {
  const { companyName, logo, secNumber } = req.body;

  const result = db.query(
    "UPDATE customer SET companyName = $1, logo = $2, secNumber = $3,",
    [companyName, logo, secNumber]
  );
  result
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
};
const deleteCompany = async (req, res) => {
  const { id } = req.params;
  const result = db.query("DELETE FROM customer WHERE id = $1", [id]);
  result
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
};

export {
  getAllCompany,
  createCompany,
  getCompany,
  updateCompany,
  deleteCompany,
};
