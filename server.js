import express from 'express';
import dotenv from 'dotenv';
import postRoutes from './routes/postRoutes.js';
import urlLogger from './middleware/urlLogger.js';
import authRoutes from './routes/authRoutes.js';
import connectDB from './config/db.js';
import dns from 'node:dns/promises';

dns.setServers(['1.1.1.1', '8.8.8.8']); 
dotenv.config();

const app = express();

app.use(express.json());
app.use(urlLogger);

app.get("/health", (req, res) => {
    res.send("Hello World");
});

app.use("/api", postRoutes);
app.use("/auth", authRoutes);

connectDB().then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
});
