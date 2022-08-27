//-------- Generics------------
// quando eu não sei o que vou receber e preciso que o tipo seja igual
// <u> recebe o tipo em TypeCallback<T>
type TypeCallback<U> = (value: U, index?: number, array?: U[]) => boolean
//<T> Tipo generico -> O tipo que saiu tem que ser igual ao que entrou
export function filter<T>(array: T[], callbackfn: TypeCallback<T>): T[] {
  const newArray = []

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i])
    }
  }

  return newArray
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arrayFiltradoOriginal = array.filter(value => value < 5)
console.log(arrayFiltradoOriginal)

const arrayFiltrado = filter(array, value => value < 5)
console.log(arrayFiltrado)

// -----------generics prontos-----------
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

// ------------Generics com interfaces e Tipos----------
//Interface
interface IPerson<T, U = number> {
  nome: T
  sobrenome: T
  idade: U
}

//Type
type TPerson<T, U = number> = {
  nome: T
  sobrenome: T
  idade: U
}

const person1: IPerson<string> = {
  nome: 'Felipe',
  sobrenome: 'Ferreira',
  idade: 35,
}

const person2: TPerson<string, number> = {
  nome: 'Felipe',
  sobrenome: 'Ferreira',
  idade: 30,
}

console.log(person1, person2)

//--------Restrições em generics----------

//K é no maximo uma key que tem em O
type TGetValue = <O, K extends keyof O>(object: O, key: K) => O[K]

const getValue: TGetValue = (object, key) => object[key]

const db = {
  e_mail: 'a@a.com',
  users: ['Felipe', 'Ferreira'],
  id: 10,
}

const user = getValue(db, 'users')
const adress = getValue(db, 'e_mail')
const id = getValue(db, 'id')

console.log(user, adress, id)

//----------Intersection-------
//Criando num novo objeto baseado nos objetos de entrada
function unionObject<T, U>(object1: T, object2: U): T & U {
  // return { ...object1, ...object2 };
  return Object.assign({}, object1, object2)
}

const object1 = { key1: 'value1' }
const object2 = { key2: 'value2' }
const union = unionObject(object1, object2)
console.log(union)
