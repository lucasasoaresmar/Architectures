'use strict'

module.exports = function buildFindTodos({ Database }) {
    return async function findTodos() {
        return await Database.findAll()
    }
}