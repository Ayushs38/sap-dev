import express from "express";
import session from "express-session";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"
import productsRoutes from "./routes/productsRoutes.js"
dotenv.config();
const app = express();

//Middlewares
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-type']
}));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', // Required for cross-site cookie
        httpOnly: true
    }
}));

// Routes 

app.use("/",authRoutes);
app.use("/products",productsRoutes)

export default app;
