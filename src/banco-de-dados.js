import {app} from './rotast/app';

app.listen(process.env.PORT || 3000);
dados = {
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
module.exports = banco-de-dados;