const express = require('express');
const handlebars = require('express-handlebars');
const router = require('./routes');
const cookieParser = require('cookie-parser');
const mongoConnect = require('./db');
const session = require('express-session');



const app = express();

app.use(session({
    secret: 'CodeSecret', 
    resave: false,        // No guarde la sesión si no se ha modificado
    saveUninitialized: true, // Guarde una sesión vacía si no hay datos
    cookie: { maxAge: 3600000 } 
  }));


app.use(express.json())
app.use(express.urlencoded({extended:true}))//si eventualemnte viene algo por form , poder trabajarlo sin problemas
app.use(express.static(__dirname + '/public'))//static sirve para establecer carpetas publicas, archivos estatico, dirname(path) para que apunte a mi ruta y lo concatene con /public y ubique mis archivos alli.

app.use(cookieParser());

app.engine('handlebars', handlebars.engine({
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
  },
}))//para hacer serverside render, lado del front, van utilizar archivos con extension handlebars
app.set   ( 'view engine', 'handlebars' );
app.set('views',__dirname + '/views')
// app.use('/public', express.static(path.join(__dirname, 'public')));

mongoConnect();

router(app)

module.exports = app;