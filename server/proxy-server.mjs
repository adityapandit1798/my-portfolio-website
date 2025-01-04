import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import fetch from 'node-fetch';

const app = express();

// Load environment variables from the .env file
dotenv.config({ path: path.resolve('../.env') });

const PORT = 8080;
const NOTION_API_KEY = process.env.NOTION_API_KEY;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

app.post('/notion-api', async (req, res) => {
    const { endpoint } = req.body;
    if (!endpoint) {
        return res.status(400).json({ error: 'Missing endpoint in request body' });
    }

    const notionUrl = `https://api.notion.com/v1${endpoint}`;
    try {
        const response = await fetch(notionUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${NOTION_API_KEY}`,
                'Notion-Version': '2022-06-28',
            },
        });

        if (!response.ok) {
            throw new Error(`${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching Notion API data:', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
    console.log(`Notion API Key: ${NOTION_API_KEY}`);
});
