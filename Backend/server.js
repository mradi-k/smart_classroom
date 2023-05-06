const app = require("./app");

const dotenv = require("dotenv");

dotenv.config({ path: "config/config.env" });
//connect Data Base
const connectDatabase = require("./config/database");
const cloudanary = require("cloudinary");
connectDatabase();
cloudanary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
