const hapi = require('@hapi/hapi')
const Inert = require('@hapi/inert')
require('dotenv').config()

const server = hapi.server({
    port: process.env.PORT,
    routes: {
        cors: {
            origin: ['*'],
            headers: ['Authorization'],
            exposedHeaders: ['Accept'],
            additionalExposedHeaders: ['Accept'],
            maxAge: 60,
            credentials: true
        }
    }
})

const init = async () => {
    await server.register(Inert)
    await server.start()

    console.log(`Server is running at ${server.info.uri}`)

    process.on('unhandledRejection', err => {
        console.log(err)
        process.exit(1)
    })
}

//   server.route(routes)

init()