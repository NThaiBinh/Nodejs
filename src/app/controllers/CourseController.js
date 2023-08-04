class CourseController {

    // [GET] /courses
    index(req, res) {
        res.render('courses');
    }

    nodejs(req, res) {
        res.send('Nodejs');
    }

    javascript(req, res) {
        res.send('Javascript');
    }
    
}

export const courseController = new CourseController;