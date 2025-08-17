const Scheme = require("../models/Scheme");


// Get all schemes (optional: filter by language in query)
const getSchemes = async (req, res) => {
  try {
    const { language } = req.query;
    let query = {};

    if (language) {
      query.language = language;
    }

    const schemes = await Scheme.find(query);
    res.json(schemes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching schemes", error });
  }
};

module.exports = { getSchemes };
