import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  // ... existing signup code ...
};

export const login = async (req, res) => {
  // ... existing login code ...
};

export const logout = (req, res) => {
  // ... existing logout code ...
};

export const checkAuth = (req, res) => {
    console.log("CheckAuth called"); // Added logging for debugging
    if (req.user) {
        res.status(200).json(req.user);
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
};
