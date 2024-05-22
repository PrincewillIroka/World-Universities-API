const University = require("../models/University");

const suggestAUniversity = {
  handler: async (request, response) => {
    const { name, website, country } = request.payload;
    let message = "";

    if (name) {
      //Save suggestion to db
    }

    return { response: message };
  },
};

const getUniversitiesByName = {
  handler: async (request, h) => {
    try {
      const { name, skip, limit } = request.payload;
      const universities = await University.find({
        name: new RegExp(name, "i"),
      })
        .sort({ name: 1 })
        .skip(skip)
        .limit(limit)
        .lean();
      return h.response(universities).code(200);
    } catch (error) {
      console.error(error);
      return h.response("Oops something went wrong!").code(500);
    }
  },
};

const getDefaultUniversities = {
  handler: async (request, h) => {
    try {
      const { skip, limit } = request.payload;
      const universities = await University.find({})
        .sort({ name: 1 })
        .skip(skip)
        .limit(limit)
        .lean();
      return h.response(universities).code(200);
    } catch (error) {
      console.error(error);
      return h.response("Oops something went wrong!").code(500);
    }
  },
};

const getUniversitiesByCountry = {
  handler: async (request, h) => {
    try {
      let { country, skip, limit } = request.payload;
      // country = country.replace(/^./, (str) => str.toUpperCase());
      const universities = await University.find({
        $or: [
          {
            country: new RegExp(country, "i"),
          },
          { alpha_two_code: country.toUpperCase() },
        ],
      })
        .skip(skip)
        .limit(limit)
        .lean();
      return h.response(universities).code(200);
    } catch (error) {
      console.error(error);
      return h.response("Oops something went wrong!").code(500);
    }
  },
};

const getHomePage = {
  handler: async (request, h) => {
    return h.response("Welcome to World Universities API").code(200);
  },
};

routes = [
  {
    method: "POST",
    path: "/suggestAUniversity",
    config: suggestAUniversity,
  },
  {
    method: "POST",
    path: "/api/getDefaultUniversities",
    config: getDefaultUniversities,
  },
  {
    method: "POST",
    path: "/api/getUniversitiesByName",
    config: getUniversitiesByName,
  },
  {
    method: "POST",
    path: "/api/getUniversitiesByCountry",
    config: getUniversitiesByCountry,
  },
  {
    method: "GET",
    path: "/api/health",
    config: getHomePage,
  },
];
module.exports = routes;
