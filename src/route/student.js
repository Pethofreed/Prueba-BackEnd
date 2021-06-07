const router = require('express').Router()
const { authAdmin } = require('../utils/authAdmin')
const { authAlumn } = require('../utils/authAlumn')
const studentController = require('../controller/student.controller')

router.route('/v1/students').post(authAdmin, studentController.createAlumn)
router.route('/v1/students/getAlumns').get(authAdmin,studentController.viewAlumns)
router.route('/v1/students/note').post(authAdmin, studentController.addGrade)
router.route('/v1/students/average').get(authAdmin,studentController.viewAverage)
router.route('/v1/students/getAlumn').get(authAlumn, studentController.getAlumn)

module.exports = router