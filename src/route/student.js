const router = require('express').Router()
const { authAdmin } = require('../utils/authAdmin')
const studentController = require('../controller/student.controller')

router.route('/v1/students').post(authAdmin, studentController.createAlumn)
router.route('/v1/students/getAlumns').get(authAdmin,studentController.viewAlumns)

module.exports = router