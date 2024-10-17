const viewEngine = (app) => {
    app.set('view engine', 'ejs'); // Sử dụng ejs làm view engine
    app.set('views', './views'); // Đường dẫn tới thư mục views
};

export default viewEngine;
