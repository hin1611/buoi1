import express from 'express';
import dotenv from 'dotenv/config';
import viewEngine from './viewEngine.js';
import webRoute from './webRoute.js'; // Import webRoute.js

const app = express();
const port = process.env.PORT || 3000;

// Cấu hình view engine
viewEngine(app);

// Sử dụng webRoute cho các route của ứng dụng
app.use('/', webRoute);

// Khởi động server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
