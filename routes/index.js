// const usersController = require('../controllers/user/controller.users')
// const homeController = require('../controllers/home/controller.home')
// const contactoController = require('../controllers/contacto/controller.contacto')
// const loginController = require('../controllers/login/controller.login')
// const profileController = require('../controllers/profile/controller.profile')
// const logoutController = require('../controllers/logout/controller.logout')
const products = require('../controllers/products/products')

const router = app => {
    // app.use('/api/sessions', contactoController);
    // app.use('/api/userController', usersController);
    app.use('/api/products', products);
}
module.exports = router