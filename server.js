const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = "eed5327d20c86281196fc2a77baaf5f6";
const API_URL = "https://smmwiz.com/api/v2";

// Test route
app.get("/", (req, res) => {
    res.send("SMM Backend is running");
});

// Create order route
app.post("/order", async (req, res) => {
    try {
        const { service, link, quantity } = req.body;

        const response = await axios.post(API_URL, {
            key: API_KEY,
            action: "add",
            service: service,
            link: link,
            quantity: quantity
        });

        res.json(response.data);

    } catch (err) {
        res.status(500).json({ error: "API error" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
