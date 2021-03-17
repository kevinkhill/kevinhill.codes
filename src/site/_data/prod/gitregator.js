require("dotenv/config");
const { GitRegator } = require("gitregator");

module.exports = () => {
  const client = new GitRegator({
    username: "kevinkhill",
    apiKey: process.env.GITHUB_API_KEY
  });

  return new Promise(async (resolve, reject) => {
    try {
      const repos = await client.getUserRepoTitles();

      if (repos.length > 0) {
        const projects = [];

        for (const repo of repos) {
          const info = await client.getInfoFromRepo(repo);

          if (info) {
            projects.push(info);
          }
        }

        resolve({ repos, projects });
      } else {
        resolve({ repos, projects: [] });
      }
    } catch (err) {
      reject({ repos: [], projects: [err] });
    }
  });
};
