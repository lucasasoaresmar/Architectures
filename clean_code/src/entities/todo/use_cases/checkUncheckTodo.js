'use strict'

const buildTodo =  require('../index')

module.exports = function buildCheckUncheckTodo({ Database, Time }) {
    return async function checkUncheckTodo({ id, done }) {
        if (!id) throw new Error('Id required')
        if (done === null || done === undefined) throw new Error('Must know todo status')
        
        return Database.update({
            id,
            done: !done,
        })
    }
}
