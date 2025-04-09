function funcao1 () {
    return new Promise((resolve, reject)=>{
const numero = Math.floor(Math.random()*10)
if (numero > 5){
    resolve('deu tudo certo')
}else{
    reject('deu tudo errado')
}

  })
}

const variavel = funcao1()

variavel.then(
    (msg)=>{console.log(msg)}
).catch(
    (erro)=>{console.log(erro)}
)

.catch(
)

