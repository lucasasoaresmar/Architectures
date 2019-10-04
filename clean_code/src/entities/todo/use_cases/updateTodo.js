'use strict'

const buildTodo =  require('../index')

module.exports = function buildUpdateTodo({ Database, Time }) {
    return async function updateTodo({
        id,
        ...todo
    }) {
        if (!id) throw new Error('Id required')
        if (!todo) throw new Error('Todo required')
        
        return Database.update({
            id,
            ...todo
        })
    }
}
