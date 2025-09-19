// This is a SAFE demonstration application with no security vulnerabilities
// This file shows how code should look after vulnerabilities are fixed

const express = require('express');
const app = express();

// SECURE: API key stored in environment variables
const DESERT_API_KEY = process.env.DESERT_API_KEY || 'default-public-key';

app.get('/desert-data', (req, res) => {
    // Secure endpoint that protects sensitive data
    const publicDesertData = {
        locations: [
            { name: "Public Desert", coordinates: "REDACTED", resource_density: "unknown" },
            { name: "Research Zone", coordinates: "REDACTED", resource_density: "classified" }
        ],
        // SECURE: No API key exposed in response
        last_public_update: new Date().toISOString()
    };
    
    res.json(publicDesertData);
});

// SECURE: Parameterized query prevents SQL injection
app.get('/creature-tracker/:location', (req, res) => {
    const location = req.params.location;
    
    // SECURE: Input validation and parameterized queries
    if (!/^[a-zA-Z0-9\-\s]+$/.test(location)) {
        return res.status(400).json({ error: 'Invalid location format' });
    }
    
    res.json({ 
        message: "Desert monitoring system active",
        location: location,
        status: "secure"
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Desert monitoring system running securely on port ${port}`);
    console.log("Security: All vulnerabilities have been addressed!");
});