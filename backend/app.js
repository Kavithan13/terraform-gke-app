const express = require("express");
const app = express();

// ✅ Root path (for health + debug)
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// ✅ API route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Backend 🚀" });
});

// ✅ Catch ALL routes (critical fix)
app.get("*", (req, res) => {
  res.json({ message: "Handled by backend ✅", path: req.originalUrl });
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});