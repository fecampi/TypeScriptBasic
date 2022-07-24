//Tipo como contrato
type TypeName = {
  name: string
}

type TypeLastName = {
  lastName: string
}

type TypeFullName = {
  fullName: () => string
}

//Classe 'Person' implementa os tipos
export class Person implements TypeName, TypeLastName, TypeFullName {
  constructor(public name: string, public lastName: string) {}

  fullName(): string {
    return this.name + ' ' + this.lastName
  }
}

const person = new Person('Felipe', 'Ferreira')
console.log(person.fullName())
