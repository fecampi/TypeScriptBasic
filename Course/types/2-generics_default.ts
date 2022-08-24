// genericos prontos
const arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6]
console.log(arrayNumeros)

//Determina que o retorno sempre é number por o "retorno ser 1"
async function promiseAsync() {
  return 1
}

//Agora não se pode determinar se o  retorno é number, então utilizamos o <number>"
function newPromisse(): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}

promiseAsync().then(resultado => console.log(resultado + 1))
newPromisse().then(resultado => console.log(resultado + 1))
