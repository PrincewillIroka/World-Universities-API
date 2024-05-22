const hapi = require("@hapi/hapi");
const ip = require("ip");
const routes = require("./routes");

require("dotenv").config();

const { NODE_ENV, APP_HOST, APP_PORT } = process.env;

const server = hapi.server({
  port: APP_PORT,
  host: NODE_ENV == "development" ? ip.address() : APP_HOST,
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

  server.route(routes);

  process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
  });
};

init();
