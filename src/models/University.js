const mongoose = require("mongoose");

const UniversityShema = new mongoose.Schema(
  {
    name: String,
    domains: [],
    web_pages: [],
    country: String,
    alpha_two_code: String,
    "state-province": String,
  },
  { usePushEach: true, timestamps: true }
);

const University = mongoose.model("University", UniversityShema);

module.exports = University;
