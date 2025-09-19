// This is a demonstration application with a simulated "Shai-Hulud" vulnerability
// DO NOT use this code in production - it contains intentional security flaws

const express = require('express');
const app = express();

// Shai-Hulud vulnerability: Hardcoded API key that gives access to the spice
const SPICE_API_KEY = "shai-hulud-arrakis-secret-2024";

app.get('/spice-data', (req, res) => {
    // Vulnerable endpoint that exposes sensitive spice location data
    const spiceData = {
        locations: [
            { name: "Great Erg", coordinates: "30.5°N 8.0°W", spice_density: "high" },
            { name: "Funeral Plain", coordinates: "25.2°N 12.5°W", spice_density: "medium" }
        ],
        api_key: SPICE_API_KEY, // Shai-Hulud: API key leaked in response
        last_worm_sighting: "2024-01-15T14:30:00Z"
    };
    
    res.json(spiceData);
});

// Another Shai-Hulud vulnerability: SQL injection in sandworm tracking
app.get('/worm-tracker/:location', (req, res) => {
    const location = req.params.location;
    
    // Shai-Hulud: Direct SQL injection vulnerability
    const query = `SELECT * FROM sandworm_sightings WHERE location = '${location}'`;
    
    res.json({ 
        query: query,
        warning: "The spice must flow, but not your data!"
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Spice monitoring system running on port ${port}`);
    console.log("Warning: Contains Shai-Hulud vulnerabilities - for demonstration only!");
});