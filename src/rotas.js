
const express = require('express')


const app = express()
const dados = {
    id:1,
    nome: 'Pedro',
    idade: 25,
    email: 'pedro@gmail.com',
    senha: '1236',
    cpf:'03856974394',
    endreco : {
        logradouro: 'Rua dos Cachorros',
        numero: 123,
        cidade: 'São Paulo'
    }
}

app.get('/cadastro', (req, res) => {
    console.log(req.query)
    res.send(dados)
})
app.get('/cadastro/:id', (req, res) => {
    console.log(req.params.id)
    res.send(dados)
}
)
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
