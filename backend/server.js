import express from "express";
import cors from "cors";
import noteRoutes from './routes/notesRoutes.js'
import  connectDB  from "./config/db.js";
import dotenv from 'dotenv';
dotenv.config();


console.log(process.env.PORT)

// if (process.env.NODE_ENV !== "production") {
//   app.use(
//     cors({
//       origin: "http://localhost:5173",
//     })
//   );
// }

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(cors());
app.use("/api/notes", noteRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}


// middleware






const startServer = async () => {
 await connectDB();
  app.listen(PORT, () => console.log(`Server is running...http://localhost:${PORT || 5000}`));
};
startServer();

