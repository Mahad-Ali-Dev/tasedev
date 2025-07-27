// import express, { urlencoded } from 'express';
// import connectDB from '../db/index.js'; 
// import dotenv from 'dotenv';
// import inquiryRoutes from '../routes/inquiry.routes.js';
// import cors from 'cors';
// import path from 'path';
// import { fileURLToPath } from 'url';

// // Enable ES module path compatibility
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Load .env variables
// dotenv.config({
//   path: path.join(__dirname, '../.env')  
// });

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors({
//   origin: process.env.CORS_ORIGIN || '*', 
//   credentials: true
// }));
// app.use(express.json({ limit: '16kb' }));
// app.use(urlencoded({ extended: true, limit: '16kb' }));
// app.use(express.static('public'));

// // Routes
// app.use('/api/inquiries', inquiryRoutes);

// // Start server after DB connection
// connectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`✅ Server is running on http://localhost:${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error('❌ MongoDB connection error:', error);
//   });
