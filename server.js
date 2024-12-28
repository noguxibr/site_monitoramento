import express from 'express'

const app = express();

const users = [];

app.post('/users', (req, res) =>{

    console.log(req)

    res.send('Ok, post')

})

app.get('/users', (req, res) =>{
    res.send('Ok, deu certo');
})

app.listen(3000);