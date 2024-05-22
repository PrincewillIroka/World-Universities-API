const hapi = require("@hapi/hapi");
const ip = require("ip");
const routes = require("./routes");
const db = require("./db");

require("dotenv").config();

const { NODE_ENV, APP_HOST, APP_PORT } = process.env;

const server = hapi.server({
  port: APP_PORT,
  host: ip.address(),
  routes: {
    cors: {
      origin: ["*"],
      headers: ["Authorization"],
      exposedHeaders: ["Accept"],
      additionalExposedHeaders: ["Accept"],
      maxAge: 60,
      credentials: true,
    },
  },
});

const init = async () => {
  await server.start();

  console.log(`Server is running at ${server.info.uri}`);

  db.connect();

  server.route(routes);

  process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
  });
};

init();
