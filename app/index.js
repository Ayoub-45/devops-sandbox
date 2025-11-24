import { config } from "dotenv";
import express from "express";
config()
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "devops-sandbox"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
