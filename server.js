import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/postRoutes.js';
import urlLogger from './middleware/urlLogger.js';
import authRoutes from './routes/authRoutes.js';
import connectDB from './config/db.js';
import dns from 'node:dns/promises';

dns.setServers(['1.1.1.1', '8.8.8.8']);
dotenv.config();

const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(urlLogger);

app.get("/health", (req, res) => {
    res.send("Hello World");
});

app.use("/api", postRoutes);
app.use("/auth", authRoutes);

// JSON error handler — must be defined after all routes
app.use((err, req, res, next) => {
    console.error('[Error]', err.message);
    res.status(err.status || 500).json({ message: err.message || 'Internal server error' });
});

connectDB().then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
});
