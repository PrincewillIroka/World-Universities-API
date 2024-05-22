const fs = require("fs");
const path = require("path");

let universitiesData = [];

fs.readFile(
  path.resolve(__dirname, "../static/world_universities_and_domains.json"),
  (err, data) => {
    if (err) throw err;
    universitiesData = JSON.parse(data);
  }
);

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
  handler: async (request, response) => {
    let { name, index, number } = request.payload,
      value = [];
    if (universitiesData) {
      // const newUni = universitiesData.filter(uData => uData.name.startsWith(name))
      const newUni = universitiesData.filter(
        (uData) =>
          uData.name.toLowerCase().includes(name.toLowerCase()) ||
          (uData.alias
            ? uData.alias.toLowerCase().includes(name.toLowerCase())
            : "")
      );
      value = newUni.slice(index, index + number);
    }
    return value;
  },
};

const getDefaultUniversities = {
  handler: async (request, h) => {
    let { index, number } = request.payload,
      value = [];
    if (universitiesData) {
      // console.log({ universitiesData });
      // const newUni = universitiesData.sort(
      //   (a, b) => a.name.toLowerCase() < b.name.toLowerCase()
      // );
      // value = newUni.slice(index, index + number);
    }
    return h.response(value).code(200);
  },
};

const getUniversitiesByCountry = {
  handler: async (request, h) => {
    let { country, index, number } = request.payload,
      value = [];
    if (universitiesData) {
      const newUni = universitiesData.filter(
        (uData) =>
          uData.country.toLowerCase().startsWith(country.toLowerCase()) ||
          (uData.alpha_two_code
            ? uData.alpha_two_code
                .toLowerCase()
                .startsWith(country.toLowerCase())
            : "")
      );
      value = newUni.slice(index, index + number);
    }
    return h.response(value).code(200);
  },
};

const getHomePage = {
  handler: async (request, response) => {
    return "Welcome to World Universities API";
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
    path: "/getDefaultUniversities",
    config: getDefaultUniversities,
  },
  {
    method: "POST",
    path: "/getUniversitiesByName",
    config: getUniversitiesByName,
  },
  {
    method: "POST",
    path: "/getUniversitiesByCountry",
    config: getUniversitiesByCountry,
  },
  {
    method: "GET",
    path: "/",
    config: getHomePage,
  },
];
module.exports = routes;
