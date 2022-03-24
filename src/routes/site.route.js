import express from 'express';
import SiteController from '../app/controllers/site.controller.js';
export const routerSite = express.Router();
export const siteController = new SiteController();

routerSite.get('/search', siteController.search);
routerSite.get('/', siteController.index);
