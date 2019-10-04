'use strict'

const uuid = require('uuid/v4')

const Id = {
    new: () => uuid(),
}

module.exports = Id
