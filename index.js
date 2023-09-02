
const app = require("./app");
require("dotenv").config();

app.listen(process.env.PORT, function () {
    console.log("Successfully Running Port")
})