const express = require("express");
const app = express();
const fs = require("fs");

app.get('/notes', (get,res)={
    res.status(200).send('working')
})

app.get ('*', (get,res)=>{

})

const port = porcess.env.PORT || 3001;
