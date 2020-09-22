let {
  listStudents,
  findStudent,
  findStudentsBy,
  addStudent,
  deleteStudent,
  dropAll
} 
 // switch out db as required
// = require('./memory/index')
= require('./mongod/index')
// = require('./pg/index')

 
let studentsDb = {
  listStudents,
  findStudent, 
  findStudentsBy,
  addStudent, 
  deleteStudent,
  dropAll
}

module.exports = studentsDb
