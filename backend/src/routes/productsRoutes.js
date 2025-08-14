import { Router } from "express";
import { getAccessibleProductGroups, submitProducts } from "../controllers/products.controller.js";

const router = Router();

// add routes
// router.get("/groups", getAccessibleProductGroups);

router.get("/groups", (req, res, next) => {
  // If vendor query param is present, filter by vendor
  if (req.query.vendor) {
    req.session = req.session || {};
    req.session.user = req.session.user || {};
    req.session.user.organization = req.query.vendor;
  }
  next();
}, getAccessibleProductGroups);

router.post("/submit", submitProducts);

export default router 
