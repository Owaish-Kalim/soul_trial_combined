const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const request = require('request')
const axios = require('axios')
// import axios from 'axios'

// const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    name: req.body.first_name,
    email: req.body.email,
    password: req.body.password,
  }
  
  axios.post('http://localhost:8000/api/users', userData)
  .then (response => console.log('REGISTERED'))
  .catch(e=>console.log(`Error: ${e}`)) 
})

users.post('/login', (req, res) => {
  const userData = {
    email: req.body.email,
    password: req.body.password
  }

  axios
  .post('http://localhost:8000/api/users',userData)
  .then(response => {
    console.log('Logged In')
  }).catch(e=> console.log(e))

  console.log("LOGIN request received")
  console.log("Email: "+userData.email)
  console.log("Password: "+userData.password)

//   User.findOne({
//     where: {
//       email: req.body.email
//     }
//   })
// //     .then(user => {
//       if (user) {
//         if (bcrypt.compareSync(req.body.password, user.password)) {
//           let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
//             expiresIn: 1440
//           })
//           res.send(token)
//         }
//       } else {
//         res.status(400).json({ error: 'User does not exist' })
//       }
//     })
//     .catch(err => {
//       res.status(400).json({ error: err })
//     })
})

users.get('/profile', (req, res) => {
  // var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  console.log(req)                         // no response bcoz profile.js is not sending any request at present.
  console.log("profile request received") // request not getting received.
//   User.findOne({
//     where: {
//       id: decoded.id
//     }
//   })
//     .then(user => {
//       if (user) {
//         res.json(user)
//       } else {
//         res.send('User does not exist')
//       }
//     })
//     .catch(err => {
//       res.send('error: ' + err)
//     })
})

module.exports = users
