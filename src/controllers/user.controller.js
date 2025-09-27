import userModel from "../models/user.model.js";
import { countryCodes } from "../config/country-code.js";

export const registerController = async (req, res) => {
  try {
    let { name, number, country } = req.body;
    if (!name || !number) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const userExists = await userModel.findOne({ number });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    country = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();

    const payload = {
      name,
      number,
      country,
      countryCode: countryCodes[country],
    };
    const user = await userModel.create(payload);
    res.status(201).json({
      message: "User created successfully",
      isRegistered: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginController = async (req, res) => {
  try {
    let { number } = req.body;
    if (!number) {
      return res.status(400).json({ message: "Number is required" });
    }
    const user = await userModel.findOne({ number });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found. Register first." });
    }
    res.status(200).json({
      message: "User logged in successfully",
      isLoggedIn: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUsersController = async (req, res) => {
  try {
    let { name } = req.params;
    if (!name) {
      return res.status(400).json({ message: "User name is required" });
    }
    const users = await userModel.findOne({ name });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUsersByIdController = async (req, res) => {
  try {
    let { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "User id is required" });
    }
    const users = await userModel.findOne({ _id: id });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};