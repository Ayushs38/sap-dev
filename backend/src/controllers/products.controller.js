import { vendors } from "../models/dataStore.js";

// Return list of vendors + productGroups
export const getVendorsAndGroups = (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  // Return all vendors so user can select if allowed
  res.json({ vendors });
};

// Return product groups for logged-in user's organization OR a selected vendor
export const getAccessibleProductGroups = (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const vendorName = req.query.vendor || req.session.user.organization;
  const vendor = vendors.find(v => v.name === vendorName);

  if (!vendor) {
    return res.status(404).json({ message: "Vendor not found" });
  }

  res.json({ productGroups: vendor.productGroups });
};

// Save submitted products
export const submitProducts = (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const { selectedProducts, vendor, group, month, year, groupReviewer, groupStatus, groupRemarks } = req.body;

  // Here you would save to DB
  console.log("Submission received:", {
    selectedProducts,
    vendor,
    group,
    month,
    year,
    groupReviewer,
    groupStatus,
    groupRemarks
  });

  res.json({ message: "Products submitted successfully" });
};
