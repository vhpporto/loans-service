import { Router } from "express";
import { loans } from "../controllers/LoansController.js";

const loansRoutes = Router();

loansRoutes.post("/customer-loans", loans);

export default loansRoutes;
