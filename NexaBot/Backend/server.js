const express = require('express');
const app = express();
require('dotenv').config();
const PORT =  process.env.PORT || 3000 ;
const cors = require('cors')
// using the middleware
app.use(express.json());

// using the cors
app.use(cors({
  origin : "http://localhost:5173"
}))

// mounting the apis

const apiRouter = require('./routes/apiRoutes.js');
app.use('/api',apiRouter);


app.get('/',(req,res)=>{
  res.send("Hello world")
})

app.listen(PORT,()=>{
  console.log("App started successfully ",PORT);
})
