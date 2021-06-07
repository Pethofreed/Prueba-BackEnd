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
  addGrade(req,res) {
    const { document, note } = req.body
    if(note % 1 !== 0){
      res.status(403).json('Su nota debe ser un número entero')
      return
    }
    if(note > 5){
      res.status(403).json('La nota debe ser un número entre 0 y 5')
      return
    }
    if(note < 0){
      res.status(403).json('La nota debe ser un número entre 0 y 5')
      return
    }
    const student = jsonData.students.find(student => student.document === document)
    const index = jsonData.students.indexOf(student)
    student.note = note
    jsonData.students.splice(index, 1, student)
    let data = JSON.stringify(jsonData);
    fs.writeFileSync('src/students_list.json', data)
    res.status(200).json(student)
  },
  viewAverage(req,res) {
    const allNotes = []
     jsonData.students.forEach(student => {
       allNotes.push(student.note)
     })
     const accumulator = (accumulator, currentValue) => accumulator + currentValue
     const average =  (allNotes.reduce(accumulator)) / allNotes.length
     res.status(200).json(parseFloat(average.toFixed(2)))
  },
  getAlumn(req,res) {
    const { id } = req.body
    const student = jsonData.students.find(student => student.id === id)
    if(!student){
      res.status(404).json(`No se encontraron resultados para el ID ingresado.`)
    }
    res.status(200).json(student)
  },
}