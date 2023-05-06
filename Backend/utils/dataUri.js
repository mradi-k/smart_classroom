// import DataUriParser from "datauri/parser.js";
const DataUriParser = require("parse-data-uri");
const path = require("path");
const getDataUri = (file) => {
  const parser = new DataUriParser();
  const extName = path.extname(file.originalname).toString();
  console.log(extName);
  return parser.format(extName, file.content);
};

module.exports = getDataUri;
