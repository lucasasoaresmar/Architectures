'use strict'

const buildTodo =  require('../index')

module.exports = function buildDeleteTodo({ Database }) {
    return async function deleteTodo(todoData) {
        if (!todoData.id) throw new Error('Id required')

        return Database.delete(todoData)
    }
}
