var express = require("express"),
app = express();

app.use(express.static(__dirname + '/public/'));
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("colorGame")
})

app.listen(3001, () => {
    console.log("color game server is running.")
})