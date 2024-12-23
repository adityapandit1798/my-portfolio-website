const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config(); // To read from the .env file

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080; // Use the port from the environment variable or fallback to 8080

// Proxy route to the Notion API
app.post("/notion-api", async (req, res) => {
  try {
    const { endpoint, method, headers, body } = req.body;

    // Send request to Notion API
    const response = await axios({
      url: `https://api.notion.com/v1${endpoint}`,
      method: method || "GET",
      headers: {
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`, // Use environment variable for Notion API key
        "Notion-Version": "2022-06-28",
        ...headers,
      },
      data: body || null,
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(error.response?.status || 500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
