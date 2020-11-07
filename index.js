const express = require('express');
const mailer = require('./src/modules/mailer');

const app = express();

app.get('/', (req, res)=>{
    res.send('conectado');
})

app.get('/enviar',(req, res)=>{
    const dados = 'Eu recebi seus dados da constante, porem podem ser de um input tbm';

    mailer.sendMail({
        to: 'coloca o mailtrap aqui', //para quem enviar
        from: 'fulano@gmail.com', //quem vai enviar (pode ser ficticio)
        template: 'auth/dados', // dados do template em resources
        context: { dados }, //dado que sera gravado no template
    }, (err)=>{
        if(err){
            return res.status(400).send({error: 'Não foi possivel enviar dados'});
        }
        return res.send(); //retorna status 200 se tudo correr bem.
    })

})

app.listen(3000, ()=>{
    console.log('conexao estabelecida');
})