// Generics com interfaces e Tipos
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
