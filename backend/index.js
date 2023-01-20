
if (process.env.NODE_ENV !== 'production') { 
  require('dotenv').config();
}  
console.log('project ', process.env.NODE_ENV)

const express = require('express')
const morgan = require('morgan')//Nos permite ver por consola lo que las aplicaciones cliente van pidiendo
const path = require('path')
const cors = require('cors')
//
//Initializations
const app = express()
require('./database')

//Setting
app.set('port', process.env.PORT || 3000) // Choose number port

// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))//This middleware lets to read data from forms like json 
app.use(express.json())
app.use(cors())

// Routes//
app.use('/api/projects', require('./routes/projects'))

//Static files//
app.use(express.static(path.join(__dirname, 'public')))// En la direccion http://localhost:4000 me mostrara los ficheros estaticos index.html etc..



//Start the server//
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})