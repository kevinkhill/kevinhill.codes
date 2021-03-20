const path = require("path");
const { PROD_DATA } = require("./paths");

(async () => {
  const data = require(path.join(PROD_DATA, process.argv[2]));
  const res = await data();

  console.log(res);
})();
