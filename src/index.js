import "dotenv/config";
import express from "express";
import loansRoutes from "./routes/router.js";
const app = express();
app.use(express.json());

const PORT = 3000;

app.use("/", loansRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
