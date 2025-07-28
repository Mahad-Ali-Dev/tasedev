import Inquiry from "../models/inquiry.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHndler.js";
import mongoose from "mongoose";

export const submitInquiry = asyncHandler(async (req, res) => {
  try {
    console.log("Request Headers:", req.headers);
    console.log("Raw Request Body:", req.body);
    
    const { selectedService, name, email, company, comment } = req.body;

    if (!selectedService || !name || !email || !comment) {
      console.log(" Missing required fields");
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
        data: null
      });
    }

    const inquiry = await Inquiry.create({
      selectedService: selectedService,
      name: name,
      email: email,
      company: company,
      comment: comment
    });

    console.log("Saved to DB:", inquiry);

    res.status(201).json(
      new ApiResponse(201, inquiry, "Inquiry sent successfully", true)
    );

  } catch (err) {
    console.error("Error saving inquiry:", err);
    
    if (err.name === 'ValidationError') {
      return res.status(400).json(new ApiError(400, err.message));
    }
    
    return res
      .status(500)
      .json(new ApiError(500, "Server is not responding or inquiry failed"));
  }
});

