const express = require('express');
const app = express();
const router = express.Router();

app.get('/:m/:n', (req, res) => {
    res.send({
        result: calc(req.params.m, req.params.n),
    });
});

function calc(m, n){

    let i = 1;
    let result = 1;
    
    for(i = m; i <=n; i++){
        result *= i+1/i;
    }

    return result;
} 

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));