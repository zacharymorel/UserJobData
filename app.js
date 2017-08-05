const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const pgPromise = require('pg-promise')()
const app = express()

const database = pgPromise({ database: 'robotDB'})
// console.log(database);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))
app.engine('mustache', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mustache')


app.get('/', (request, response) => {
  response.render('index')
})

app.get('/:id/', (request, response) => {
  let userId = +(request.params.id)-1
  response.render('userpage', userInfo[userId])
})



app.listen(3000, () => {
  console.log('My the Force be with you');
})
