const express = require("express");
const router = express.Router();
const Scheme = require("../models/Scheme"); 
const { askQuestion } = require("../controllers/aiController"); // import your AI function

// GET all schemes
router.get("/", async (req, res) => {
  try {
    const schemes = await Scheme.find();
    res.json(schemes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST ask question
router.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;
    const answer = await askQuestion(question); // your AI function
    res.json({ answer });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
