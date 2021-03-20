require("dotenv/config");
const { GitRegator } = require("gitregator");
const seed = require("../../../utils/save-seed");

module.exports = async () => {
  const client = new GitRegator({
    username: "kevinkhill",
    apiKey: process.env.GH_TOKEN
  });

  const repos = await client.getUserRepoTitles();

  try {
    if (repos.length > 0) {
      const projects = await Promise.all(repos.map(client.getInfoFromRepo));
      const json = { repos, projects };

      seed(JSON.stringify(json), `${__dirname}/../dev/github.json`);

      return json;
    } else {
      return { repos, projects: [] };
    }
  } catch (err) {
    return { repos: [], projects: [err] };
  }
};
