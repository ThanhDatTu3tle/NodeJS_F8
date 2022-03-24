import express from 'express';
import NewsController from '../app/controllers/news.controller.js';
export const routerNews = express.Router();
export const newsController = new NewsController();

routerNews.get('/', newsController.index);
