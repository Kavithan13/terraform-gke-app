const express = require("express");
const app = express();

// ✅ health check
app.get("/", (req, res) => {
  res.send("OK");
});

// ✅ API route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Backend 🚀" });
});

// ✅ fallback (very important)
app.use((req, res) => {
  res.json({ message: "Fallback API working ✅" });
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});