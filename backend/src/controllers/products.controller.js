import {vendors, users} from '../models/dataStore.js';

export const getAccessibleProductGroups = (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  const userOrg = req.session.user.organization;
  const vendor = vendors.find(v => v.name === userOrg);
  if (!vendor) {
    return res.status(404).json({ message: "Organization not found" });
  }
  res.json({ productGroups: vendor.productGroups });
};

export const submitProducts = (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  const { selectedProducts } = req.body; // Array of products
  // Here you can process/store the products as needed
  res.json({ message: "Products submitted successfully", products: selectedProducts });
};


