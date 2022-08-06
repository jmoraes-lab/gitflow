const express = require('express')
const app = express()
//const path = require('path') // usando arquivo local
const { engine } = require('express-handlebars')
const helpers = require('./helpers/handlebars')
const routes = require ('./routes')

app.use(express.static('public'))

app.engine('handlebars',engine({
    helpers: helpers
}))
app.set('view engine','handlebars')

app.use('/',routes)

//criando um rota 
app.get('/', (req, res) => {
    //res.sendFile(path.resolve('index.html')) // arquivo local
    res.render('index')
})

app.get('/user/:id',(req, res) =>{
    const userId = req.params.id
    res.render('user', {
        userId: userId
    })
})

app.use((req, res) =>{
    res.status(404).render('404')
})

app.listen(8080, () => {
    console.log("Servidor iniciado 8080")
})
