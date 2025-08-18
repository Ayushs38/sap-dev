import { Router } from "express";
import { getVendorsAndGroups, getAccessibleProductGroups, submitProducts } from "../controllers/products.controller.js";

const router = Router();

router.get("/vendors", getVendorsAndGroups); // all vendors + groups
router.get("/groups", getAccessibleProductGroups); // productGroups for vendor
router.post("/submit", submitProducts);

export default router;