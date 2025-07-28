import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app}  from "./app.js";

// Load .env variables (automatically finds .env in project root)
dotenv.config();

const PORT = process.env.PORT || 8001;

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.log("MongoDB connection error:", error);
});