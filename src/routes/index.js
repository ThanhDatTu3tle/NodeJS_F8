import { routerNews } from './news.route.js';
import { routerSite } from './site.route.js';
import { routerCourses } from './courses.route.js';
const newsRouter = routerNews;
const siteRouter = routerSite;
const coursesRouter = routerCourses;

export function route(app) {

  //localhost:3000/courses
  app.use('/courses', coursesRouter);
 
  // localhost:3000/news
  app.use('/news', newsRouter);

  // localhost:3000/
  app.use('/', siteRouter);
}
