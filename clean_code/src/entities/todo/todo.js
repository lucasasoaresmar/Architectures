'use strict'

module.exports = function injectInBuildTodo({ Id, Time }) {
    return function buildTodo({
        id = Id.new(),
        todo,
        done = false,
        createdOn = Time.now(),
        modifiedOn = Time.now(),
    } = {}) {
        if (!todo) throw new Error('You need to write a Todo')

        return Object.freeze({
            id,
            todo,
            done,
            createdOn,
            modifiedOn,
        })
    }
}
