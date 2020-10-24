

var express = require("express");
const exphbs = require("express-handlebars");
var app = express();
// var controller = require("./controllers")
const PORT = process.env.PORT || 8080
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());




app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js")

app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});