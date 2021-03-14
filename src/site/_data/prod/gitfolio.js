require("dotenv/config");
const { GitFolio } = require("gitfolio");

module.exports = () => {
  const gitfolio = new GitFolio({
    username: "kevinkhill",
    apiKey: process.env.GITHUB_API_KEY
  });

  async function scanRepos(repoList) {
    const projects = [];

    for (const repo of repoList) {
      const info = await gitfolio.getInfoFromRepo(repo);

      if (info) {
        projects.push(info);
      }
    }

    return projects;
  }

  return new Promise(async (resolve, reject) => {
    try {
      const repos = await gitfolio.getUserRepoTitles();

      if (repos.length > 0) {
        const projects = await scanRepos(repos);

        resolve({ repos, projects });
      } else {
        resolve({ repos, projects: [] });
      }
    } catch (err) {
      reject({ repos: [], projects: [err] });
    }
  });
};
