const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.send('Home page');
});
app.listen(port,()=>{
    console.log(`App started on port: ${port}`)
})