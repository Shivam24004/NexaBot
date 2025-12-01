const axios = require('axios');
require('dotenv').config();

exports.apiController = async (req, res) => { 
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required"
      });
    }

    const apiResponse = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      { contents: [{ parts: [{ text: prompt }] }] },
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY
        }
      }
    );

    return res.status(200).json({
      success: true,
      message: "Data has been successfully generated",
      data: apiResponse.data
    });

  } catch (err) {
    console.error(err); 
    return res.status(500).json({
      success: false,
      message: "Error in calling the data",
      error: err.message
    });
  }
};
