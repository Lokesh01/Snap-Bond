import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { register } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";

// * configurations
const __filename = fileURLToPath(import.meta.url); // example /home/user/server/index.js
const __dirname = path.dirname(__filename); // /home/user/server
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* file storage */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

/* Routes with files */
app.post("/auth/register", upload.single("picture"), register); //* User Registeration

/* Routes */
app.use("/auth", authRoutes); //* user authentication
app.use("/users", userRoutes); //* route for user page

/* Mongoose Setup */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    mongoose.set("strict", true); // Enable strict mode after connection
    app.listen(PORT, () => console.log(`connected on server port: ${PORT}`));
  })
  .catch((error) => console.log(`${error.message} did not connect !`));
