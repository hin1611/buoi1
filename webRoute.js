import express from 'express';
import HomeController from './controllers/HomeController.js';
import AboutController from './controllers/AboutController.js';
import ContactController from './controllers/ContactController.js';

const router = express.Router();

// Route path: /
router.get('/', HomeController.getHome);

// Route path: /about
router.get('/about', AboutController.getAbout);

// Route path: /contact
router.get('/contact', ContactController.getContact);

export default router;
