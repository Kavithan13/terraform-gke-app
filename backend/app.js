const express = require("express");
const app = express();

// ✅ Root endpoint (health check)
app.get("/", (req, res) => {
  res.send("Backend running ✅");
});

// ✅ API endpoint (THIS IS WHAT YOU NEED)
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Backend 🚀" });
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});