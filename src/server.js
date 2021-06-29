const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended: true})) //pega o conteúdo do formulário, decodifica, e envia para o Controller

server.use(route)

server.listen(3000, () => console.log("RODANDO"))


