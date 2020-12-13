const express = require('express');
const router = express.Router();
const Note = require('../models/Note') 

router.get('/', (req, res, next) => {
  res.status(200).json({
    messsage: 'Test get'
  })
})

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Test post'
  })
})

module.exports = router
