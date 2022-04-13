import Officials from "../models/officials.js";

export const getOfficials = async (req, res) => {
  try {
    const officials = await Officials.find();
    res.status(200).json(officials);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createOfficial = async (req, res) => {
    const body = req.body;
    const newOfficial = new Officials(body);
    try {
        await newOfficial.save();
    } catch (error) {
        res.status(409).json({message: error.message})
    }
};
