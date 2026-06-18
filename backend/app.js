require('./tracing');  // ✅ must be first line

const express = require("express");
const app = express();

// ✅ Read version dynamically (important for rollout demo)
const APP_VERSION = process.env.APP_VERSION || "v1";

// ✅ Root endpoint (health check)
app.get("/", (req, res) => {
  console.log(JSON.stringify({
    severity: "INFO",
    message: "Health check called",
    version: APP_VERSION
  }));

  res.send(`Backend running ✅ - version: ${APP_VERSION}`);
});

// ✅ API endpoint
app.get("/api", (req, res) => {
  console.log(JSON.stringify({
    severity: "INFO",
    message: "API endpoint called",
    version: APP_VERSION
  }));

  res.json({
    message: "Hello from Backend 🚀",
    version: APP_VERSION
  });
});

// ✅ ERROR endpoint (for demo)
app.get("/error", (req, res) => {
  console.error(JSON.stringify({
    severity: "ERROR",
    message: "Simulated backend failure",
    service: "backend",
    version: APP_VERSION
  }));

  res.status(500).json({
    error: "Simulated backend error",
    version: APP_VERSION
  });
});

// ✅ Fallback route
app.get("*", (req, res) => {
  console.warn(JSON.stringify({
    severity: "WARNING",
    message: "Invalid route accessed",
    path: req.originalUrl,
    version: APP_VERSION
  }));

  res.status(404).json({
    message: "Invalid route",
    version: APP_VERSION
  });
});

// ✅ Start server
app.listen(3000, () => {
  console.log(JSON.stringify({
    severity: "INFO",
    message: "Server started",
    port: 3000,
    version: APP_VERSION
  }));
});
