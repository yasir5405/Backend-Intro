require('dotenv').config();
const express = require("express");
const app = express();
const port = 4000;

const githubData = {
    "login": "yasir5405",
    "id": 157472162,
    "node_id": "U_kgDOCWLVog",
    "avatar_url": "https://avatars.githubusercontent.com/u/157472162?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/yasir5405",
    "html_url": "https://github.com/yasir5405",
    "followers_url": "https://api.github.com/users/yasir5405/followers",
    "following_url": "https://api.github.com/users/yasir5405/following{/other_user}",
    "gists_url": "https://api.github.com/users/yasir5405/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/yasir5405/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/yasir5405/subscriptions",
    "organizations_url": "https://api.github.com/users/yasir5405/orgs",
    "repos_url": "https://api.github.com/users/yasir5405/repos",
    "events_url": "https://api.github.com/users/yasir5405/events{/privacy}",
    "received_events_url": "https://api.github.com/users/yasir5405/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Yasir Naseem",
    "company": null,
    "blog": "yasircodes.com",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 15,
    "public_gists": 0,
    "followers": 0,
    "following": 2,
    "created_at": "2024-01-23T08:43:40Z",
    "updated_at": "2025-01-05T12:09:42Z"
  }

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/instagram", (req, res) => {
  res.send("yasir_5405");
});

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.get("/login", (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="flex items-center justify-center h-screen bg-gray-100">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-blue-600 mb-4">Please Login to Continue</h1>
          <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
        </div>
      </body>
      </html>
    `);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
