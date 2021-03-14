const path = require("path");

module.exports = id => {
  const modulePath = path.join(
    __dirname,
    "..",
    "src",
    "site",
    "_data",
    "prod",
    process.argv[2]
  );

  return require(modulePath);
};
