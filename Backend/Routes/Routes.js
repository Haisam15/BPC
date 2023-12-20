import { Router } from "express";
import {
  Login,
  entrepreneurSignup,
  skilledPersonSignup,
  investorSignup,
} from "../Controllers/User.js";
const router = Router();

const TestRoute = router.get("/", (req, res) =>
  res.send("Hello from Homepage.")
);
const LoginRoute = router.post("/login", Login);

const EntrepreneurSignupRoute = router.post(
  "/entrepreneurSignup",
  entrepreneurSignup
);

const InvestorSignupRoute = router.post("/investorSignup", investorSignup);

const SkilledPersonSignupRoute = router.post(
  "/skilledPersonSignup",
  skilledPersonSignup
);

export {
  TestRoute,
  LoginRoute,
  EntrepreneurSignupRoute,
  InvestorSignupRoute,
  SkilledPersonSignupRoute,
};
