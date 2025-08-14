
const vendors = [
  {
    name: "TCS",
    productGroups: [
      {
        groupName: "Cloud Services",
        products: ["AWS Integration", "Azure Migration"]
      },
      {
        groupName: "Consulting",
        products: ["Business Analysis", "IT Strategy"]
      }
    ]
  },
  {
    name: "Accenture",
    productGroups: [
      {
        groupName: "Digital",
        products: ["Mobile App Dev", "Web Platform"]
      },
      {
        groupName: "Security",
        products: ["Penetration Testing", "Risk Assessment"]
      }
    ]
  },
  {
    name: "Deloitte",
    productGroups: [
      {
        groupName: "Analytics",
        products: ["Data Visualization", "Predictive Modeling"]
      },
      {
        groupName: "Tax",
        products: ["Tax Planning", "Compliance"]
      }
    ]
  }
];

const users = [
  { userId: "u001", name: "Alice", organization: "TCS", email: "alice@sap.com", password: "password123" },
  { userId: "u002", name: "Bob", organization: "TCS", email: "bob@sap.com", password: "password123" },
  { userId: "u003", name: "Charlie", organization: "Accenture", email: "charlie@sap.com", password: "password123" },
  { userId: "u004", name: "David", organization: "Accenture", email: "david@sap.com", password: "password123" },
  { userId: "u005", name: "Eve", organization: "Deloitte", email: "eve@sap.com", password: "password123" },
  { userId: "u006", name: "Frank", organization: "Deloitte", email: "frank@sap.com", password: "password123" }
];

export { vendors, users };