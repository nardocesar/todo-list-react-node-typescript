import express from "express";
import taskRoutes from "./routes/taskRoutes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
