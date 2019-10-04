'use strict'

const injectInBuildTodo = require('./todo')
const Id = require('../../services/id')
const Time = require('../../services/time.js')

const buildTodo = injectInBuildTodo({Id, Time})
module.exports = buildTodo
