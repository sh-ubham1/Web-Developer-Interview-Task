const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connection = require("./config/db");
const ContactRouter = require("./routes/Contact.routes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", ContactRouter);

// Port
const PORT = process.env.PORT || 5000;

// Server start
const startServer = async () => {
  try {
    await connection;
    console.log("✅ Database connected successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🔗 URL: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
  }
};

startServer();
