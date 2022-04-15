import Organization from "../models/organizations.js";

export const getOrganization = async (req, res) => {
  try {
    const organizations = await Organization.find();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createOrganization = async (req, res) => {
  const body = req.body;
  const newOrganization = new Organization(body);
  try {
    await newOrganization.save();
    res.send("organization creation");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
