import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Connection from './Database/Database.js';
import { TestRoute,LoginRoute, EntrepreneurSignupRoute, InvestorSignupRoute, SkilledPersonSignupRoute } from './Routes/Routes.js';
const app = express();

app.listen(5000, () => console.log("Server Running on Port 5000"));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



app.route("/").get(TestRoute);
app.route("/login").post(LoginRoute);
app.route("/entrepreneurSignup").post(EntrepreneurSignupRoute);
app.route("/investorSignup").post(InvestorSignupRoute);
app.route("/skilledPersonSignup").post(SkilledPersonSignupRoute);

