const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post('/', (req, res) => {
  const stripe = require("stripe")(process.env.STRIPE_SECRET)

// Token is created using Checkout or Elements!
// Get the payment token ID submitted by the form:
// Using Express
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys

  stripe.charges.create({
    amount: 999,
    currency: 'usd',
    description: 'Example charge',
    source: request.body.stripeToken
  }, function (error, charge) {
    if (error) {
      response.status(400).send({error: error.message, stack: error.stack})
    } else {
      response.send(charge)
    }
  })
})

app.use((req, res, next) => {
  res.status(404)
  const error = new Error('Not Found. 🔍')
  next(error)
})

app.use((error, req, res, next) => {
  res.status(res.statusCode || 500)
  res.json({
    message: error.message,
    error: error.stack
  })
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
