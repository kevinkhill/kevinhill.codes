const { GitRegator } = require("gitregator");
const { tryIt } = require("./lib");

exports.handler = async event => {
  tryIt(async () => {
    const client = new GitRegator({
      username: "kevinkhill",
      apiKey: process.env.GH_TOKEN
    });

    const { repo } = event.queryStringParameters;

    if (repo) {
      const info = await client.getInfoFromRepo(repo);

      return info;
    }
  });
};
