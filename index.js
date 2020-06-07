const express = require ('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Gi there');
});

app.listen(8080,() =>{
    Console.log('Listening on 8080');
});
