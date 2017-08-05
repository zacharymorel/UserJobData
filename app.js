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

app.get('/', (request, response) => {
    const templateData = {
      users: rows.filter(row => )
      // trying still to get the data from DataBase to render on the page.
    }
  response.render('index', templateData)
})

app.get('/:id/', (request, response) => {
  // let userId = +(request.params.id)-1
  response.render('userpage')
})

app.listen(3000, () => {
  console.log('My the Force be with you')
})
