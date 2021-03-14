const requireDataSource = require("./requireDataSource");

(async () => {
  const M = requireDataSource(process.argv[2]);

  const res = await M();

  console.dir(res);
})();
