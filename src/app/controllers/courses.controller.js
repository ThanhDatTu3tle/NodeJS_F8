import Course from '../models/Course.js';
import { mongooseToObject } from '../../util/mongoose.js'

export default class CoursesController {
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then(course => {
        res.render('courses/show', { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render('courses/create');
  }

   // [POST] /courses/store
   store(req, res, next) {
    const formData = req.body;
    formData.image = `http://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(req.body);
    course.save()
      .then(() => res.redirect('/'))
      .catch(next);
    
  }
}
