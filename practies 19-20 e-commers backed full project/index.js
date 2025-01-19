const app=require("./app");
const {PORT} = require("./src/config/config");

// App run
app.listen(PORT,function () {
    console.log("App Runs on " + PORT);
})

