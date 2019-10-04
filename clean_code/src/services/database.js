'use strict'

const loki = require('lokijs')

module.exports = function Database() {
    const db = new loki('clean.db')
    const todoCollection = db.addCollection('todo')

    return {
        findAll: async () => {
            try {
                return await todoCollection.data
            } catch (error) {
                throw error    
            }
        },
        findById: async id => {
            try {
                return await todoCollection.findOne({ id })
            } catch (error) {
                throw error    
            }
        },
        insert: async todo => {
            try {
                return await todoCollection.insert(todo)
            } catch (error) {
                throw error    
            }
        },
        update: async todo => {
            try {
                const oldTodo = await todoCollection.findOne({ id: todo.id })
                const updatedTodo = {
                    ...oldTodo,
                    ...todo,
                }
                
                return await todoCollection.update(updatedTodo)
            } catch (error) {
                    throw error    
            }
        },
        delete: async todo => {
            try {
                await todoCollection.delete(todo)
            } catch (error) {
                throw error    
            }
        },
    }
}
