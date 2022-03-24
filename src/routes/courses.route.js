import express from 'express';
import CoursesController from '../app/controllers/courses.controller.js';
export const routerCourses = express.Router();
export const coursesController = new CoursesController();

routerCourses.get('/create', coursesController.create);
routerCourses.post('/store', coursesController.store);
routerCourses.get('/:slug', coursesController.show);
 