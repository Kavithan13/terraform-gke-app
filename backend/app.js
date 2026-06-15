const express = require("express");
const app = express();

// ✅ Read version dynamically (important for rollout demo)
const APP_VERSION = process.env.APP_VERSION || "v1";

// ✅ Root endpoint (health check)
app.get("/", (req, res) => {
  res.send(`Backend running ✅ - version: ${APP_VERSION}`);
});

// ✅ API endpoint
app.get("/api", (req, res) => {
  res.json({
    message: "Hello from Backend 🚀",
    version: APP_VERSION
  });
});

// ✅ Fallback (optional but useful)
app.get("*", (req, res) => {
  res.json({
    message: "Invalid route",
    version: APP_VERSION
  });
});

// ✅ Start server
app.listen(3000, () => {
  console.log(`Server running on port 3000 - version: ${APP_VERSION}`);
});