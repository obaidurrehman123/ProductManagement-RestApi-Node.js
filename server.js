const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConnection = require("./database/connection");
dotEnv.config();
const PORT = process.env.PORT || 3000;
const app = express(); 
//db Connectivity
dbConnection();
app.use(cors());
app.use(bodyParser.json());
const myMiddleWare = (req, res , next) => {
 console.log("Hi i am the middleware");
 next();
}
//Defining the base path url in the application level and 
app.use("/api/v1/product" , require("./Routes /productRoutes"));
app.use("/api/v1/user",require("./Routes /userRoute"));
//app.use(myMiddleWare);
//if you want to apply middleware on a specific route.
app.get('/',myMiddleWare,(req , res , next)=>{
    res.send('Hello from the javascript server of ubaid ur rehman');
});
app.listen(PORT , ()=>{
    console.log('Server is listening to the port ${PORTxjjs}');
})
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })