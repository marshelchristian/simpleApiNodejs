// FileName: index.js// Import express
let express = require('express')
// import body parser
let bodyParser = require('body-parser');
// import mongoose
let mongoose = require('mongoose');
let app = express();// Initialize the app

//import routes
let apiRoutes = require("./api-routes")
// configure bodyparse to handle post request 
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());
// connect to mongoose and set connectin variable
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
var db = mongoose.connection;
// added check for db connection
if(!db)
    console.log("error connecting db")
else
    console.log("db connected succesfully")

// Setup server port
var port = process.env.PORT || 8080;// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));// Launch app to listen to specified port
//use api routes in the app
app.use('/api', apiRoutes)
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});