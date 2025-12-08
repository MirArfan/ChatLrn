import express from "express";
import morgan from "morgan";
import connect from "./db/db.js";
import cors from 'cors';
import cookieParser from "cookie-parser";
import connectCloudinary from "./db/Cloudinary.js";
import userRoutes from "./routes/user.routes.js";
import projectRoutes from './routes/project.routes.js';



const app = express();

app.use(morgan("dev"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// DB Connect here
connect();
connectCloudinary();

app.use("/users", userRoutes);
app.use('/projects',projectRoutes);

app.get("/", (req, res) => {
    res.send("Hello World");
});

export default app;