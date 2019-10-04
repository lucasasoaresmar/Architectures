'use strict'

const buildAddTodo = require('./addTodo')
const buildDeleteTodo = require('./deleteTodo')
const buildUpdateTodo = require('./updateTodo')
const buildFindTodos = require('./findTodos')
const buildCheckUncheckTodo = require('./checkUncheckTodo')
const Time = require('../../../services/time.js')
const Database = require('../../../services/database.js')()

const Todo = {
    add: buildAddTodo({ Database }),
    delete: buildDeleteTodo({  Database }),
    update: buildUpdateTodo({ Database, Time }),
    findAll: buildFindTodos({ Database }),
    checkUncheckTodo: buildCheckUncheckTodo({ Database }),
}

module.exports = Todo
