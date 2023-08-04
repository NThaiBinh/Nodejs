class SiteController {

    // [GET] /courses
    home(req, res) {
        res.render('home');
    }

    search(req, res) {
        res.render('search');
    }
    
}

export const siteController = new SiteController;