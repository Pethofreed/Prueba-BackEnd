const router = require('express').Router()
const { authAdmin } = require('../utils/authAdmin')
const studentController = require('../controller/student.controller')

router.route('/v1/students').post(authAdmin, studentController.createAlumn)
router.route('/v1/students/getAlumns').get(authAdmin,studentController.viewAlumns)
router.route('/v1/students/note').post(authAdmin, studentController.addGrade)
router.route('/v1/students/average').get(authAdmin,studentController.viewAverage)

module.exports = router