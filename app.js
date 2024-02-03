const express = require('express');
const { PORT = 3000 } = process.env;

const app = express();

app.get('/', (req,res)=>{
    res.send('Test start api'); 
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})