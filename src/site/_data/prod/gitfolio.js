const { GitFolio } = require("gitfolio");

const gitfolio = new GitFolio({
  username: "kevinkhill",
  apiKey: process.env.GITHUB_API_KEY
});

module.exports = () => {
  async function getRepoList() {
    try {
      const cache = await readCacheFile();

      return cache.repos;
    } catch (err) {
      //console.error(err);
      try {
        return gitfolio.getUserRepoTitles();
      } catch (err) {
        return [];
      }
    }
  }

  async function scanRepos(repoList) {
    const projects = await async.map(repoList, async (repo, cb) => {
      cb(null, await gitfolio.getInfoFromRepo(repo));
    });

    return projects.filter(o => o.name);
  }

  return new Promise((resolve, reject) => {
    try {
      const repos = await this.getRepoList();

      if (repos.length > 0) {
        // console.log(`User ${this.gitfolio.username} has ${repos.length} repositories.`);

        if (this.listRepos) {
          return console.dir(repos);
        }

        const projects = await this.scanRepos(repos);

        resolve({ repos, projects });
      }
    } catch (err) {
      reject(err);
    }
  });
}
