import express from "express";
import companyRoute from "./routes/companyRoutes.js";
import accountRoute from "./routes/accountRoutes.js";
import recordRoute from "./routes/recordRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(companyRoute);
app.use(accountRoute);
app.use(recordRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
