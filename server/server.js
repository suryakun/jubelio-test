'use strict'

const Hapi = require('hapi')
const dotenv = require('dotenv')
const Sequelize = require('sequelize')
const request = require('request')
const db = require('./models')
const Product = db.Product

dotenv.config()

const server = Hapi.server({
    host: 'localhost',
    port: 8000
})

server.route({
    method: 'GET',
    path: '/api/products',
    handler: (request, h) => {
        return Product.findAll({limit: 100, order: [['id', 'DESC']]})
    }
})

server.route({
    method: 'PUT',
    path: '/api/products/{id}',
    handler: async (request, h) => {
        const product = await Product.findByPk(request.params.id)
        product.update(request.payload.product)
        return product.save()
    }
})


server.route({
    method: 'DELETE',
    path: '/api/products/{id}',
    handler: async (request, h) => {
        const product = await Product.findByPk(request.params.id)
        return product.destroy()
    }
})

async function start() {
    try {
        console.log(`Server running at port 8000`)
        await server.start(() => {
            db.sequelize.sync()
        })
    } catch(err) {
        console.log(err)
        process.exit(1)
    }
}

start()
