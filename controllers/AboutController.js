import myDateTime from '../date.js';
import getURL from '../getURL.js';

class AboutController {
    static getAbout(req, res) {
        const currentDateTime = myDateTime("Thời gian hiện tại: "); // Gọi hàm từ date.js
        const path = getURL.getPath(req); // Gọi hàm getPath từ getURL.js
        const params = getURL.getParamsURL(req); // Gọi hàm getParamsURL từ getURL.js
        
        res.render('about', {
            title: 'About Page',
            currentDateTime: currentDateTime,
            path: path,
            params: params
        }); // Truyền dữ liệu vào view
    }
}

export default AboutController;
