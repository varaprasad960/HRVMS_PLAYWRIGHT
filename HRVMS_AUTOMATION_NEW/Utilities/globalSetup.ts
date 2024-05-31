import * as dotenv from "dotenv";

async function globalSetup() {
  if (process.env.test_env) {
    dotenv.config({
      path: `./env/hrvms/.env.${process.env.test_env}`,
      override: true,
    });
  }
}
export default globalSetup;