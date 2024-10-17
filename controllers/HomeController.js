class HomeController {
    // Phương thức xử lý route path "/"
    static getHome(req, res) {
        res.render('home', { title: 'Home Page' });
    }
}

export default HomeController;
