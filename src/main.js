import express from "express";
import organization_route from "./routes/organization_route.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(organization_route);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
