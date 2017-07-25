const express = require('express')
const mustacheExpress = require('mustache-express')
const userData = require('./data.js')
const app = express()
const userInfo = userData.users

app.use(express.static('public'))
app.engine('mustache', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mustache')


app.get('/', (request, response) => {
  response.render('index', userData)
})
















app.listen(3000, () => {
  console.log('My the Force be with you');
})
