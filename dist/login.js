"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUser = void 0;

const axios = require('axios');

const validateUser = (username, password) => axios.post('http://localhost:5000/login', {
  username,
  password
});

exports.validateUser = validateUser;