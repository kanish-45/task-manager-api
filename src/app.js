const express = require("express");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/tasks", taskRoutes);

// Health Check Endpoint (for Kubernetes readiness/liveness later)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Use environment variable for PORT (production best practice)
const PORT = process.env.PORT || 3000;

// IMPORTANT: Bind to 0.0.0.0 for Docker/Kubernetes
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});