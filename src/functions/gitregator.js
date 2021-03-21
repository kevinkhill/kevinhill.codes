// const { GitRegator } = require("gitregator");
// const { tryIt } = require("./lib");

// exports.handler = async (event, context) => {
//   tryIt(async () => {
//     const client = new GitRegator({
//       username: "kevinkhill",
//       apiKey: process.env.GH_TOKEN
//     });

//     const repos = await client.getUserRepoTitles();

//     if (repos.length > 0) {
//       const projects = await Promise.all(repos.map(client.getInfoFromRepo));
//       const json = { repos, projects };

//       return json;
//     } else {
//       return { repos, projects: [] };
//     }
//   });
// };
