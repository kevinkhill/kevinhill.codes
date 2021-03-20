const { join } = require("path");

const ROOT = join(__dirname, "..");
const SRC = join(ROOT, "src");
const SITE = join(SRC, "site");
const DATA = join(SITE, "_data");
const DEV_DATA = join(DATA, "dev");
const PROD_DATA = join(DATA, "prod");

module.exports = {
  ROOT,
  SRC,
  SITE,
  DATA,
  DEV_DATA,
  PROD_DATA
};
