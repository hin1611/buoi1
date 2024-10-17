class ContactController {
    // Phương thức xử lý route path "/contact"
    static getContact(req, res) {
        res.render('contact', { title: 'Contact Page' });
    }
}

export default ContactController;
