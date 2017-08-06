const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const pgPromise = require('pg-promise')()
const app = express()

const database = pgPromise({ database: 'robotDB' })
// console.log(database);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))
app.engine('mustache', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mustache')

// database.any('SELECT * FROM "robottable"').then(rows => {
//   rows.forEach(row => {
//     console.log(`This is user id ${row.id} and this is username ${row.UserName}.`)
//   })
// })
// I used this to show my database data in my console.log

app.get('/', (request, response) => {
  database.any('SELECT * FROM "robottable"').then(rows => {

    const templateData = {
      id: rows.filter(row => row.id)
      // WAT?
    }
    response.render('index', templateData)
  })
})

app.get('/:id/', (request, response) => {
  const userId = parseInt(request.params.id)
  // let userId = +(request.params.id)-1

  database.one('SELECT * FROM "robottable" WHERE id = $(id)',{id:userId})
    .then(id => {
      response.render('userpage', id)
    })
})

app.listen(3000, () => {
  console.log('My the Force be with you')
})
