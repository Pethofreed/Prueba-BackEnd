const jsonData = require('../students_list.json')
const { uuid } = require('uuidv4')
const fs = require('fs')

module.exports = {
  createAlumn(req,res) {
    const { complete_name, age, gender } = req.body
    const newStudent = {
      id: uuid(),
      complete_name,
      document: uuid().slice(0,6),
      age,
      gender,
      note: 0,
      autoevaluation: 0
    }

    jsonData.students.push(newStudent)
    let data = JSON.stringify(jsonData);
    fs.writeFileSync('src/students_list.json', data)

    res.status(201).json(newStudent)
  },
  viewAlumns(req,res){
    res.status(200).json(jsonData)
  },
}