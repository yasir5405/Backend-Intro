require('dotenv').config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/instagram", (req, res) => {
  res.send("yasir_5405");
});

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
