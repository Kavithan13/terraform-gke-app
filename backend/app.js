const express = require("express");
const app = express();

// ✅ Root endpoint (health check)
app.get("/", (req, res) => {
  res.send("Backend running ✅");
});

app.get("/api", (req, res) => {
  res.json({
    message: "Hello from Backend 🚀",
    version: "v5"
  });
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});