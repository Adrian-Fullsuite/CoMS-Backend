import express from "express";
import session from "express-session";
import organization_route from "./routes/organization_route.js";
import member_route from "./routes/member_route.js";
import authenticate_route from "./routes/authenticate_route.js";
import user_route from "./routes/user_route.js";
import companyRoute from "./routes/companyRoutes.js";
import db from "./database/db.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.json());
app.use(authenticate_route);
app.use(organization_route);
app.use(member_route);
app.use(companyRoute);
app.use(user_route);
app.get("/", (req, res) => {
  db("users")
    .select("*")
    .where("first_name", 2)
    .then((rows) => {
      console.log(rows);
    });
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
