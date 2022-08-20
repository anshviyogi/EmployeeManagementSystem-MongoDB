const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const express = require('express')
const app = express()
const exphbs = require('express-handlebars').engine
const Handlebars = require('handlebars')

// Connecting database
require('./model/db.model')

// Middleware to remove undefined
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// Handlebars Middlewares
app.engine('handlebars', exphbs({
    handlebars:allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

// Go to employee.controllers
app.use('/employee',require('./controllers/employee.controllers'))

// Go to home page
app.get('/',(req,res)=>{
    res.render('homePage')
})



// PORT Connectivity
const PORT = 4000
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))