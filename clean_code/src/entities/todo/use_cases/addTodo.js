'use strict'

const buildTodo =  require('../index')

module.exports = function buildAddTodo({ Database }) {
    return async function addTodo(todoData) {
        const todo = buildTodo({ ...todoData })
    
        return Database.insert({ ...todo })
    }
}