//Interface A
interface IPerson {
  name: string
  lastName: string
}

//Interface B
interface IPerson {
  readonly address: readonly string[]
  age?: number
}

// A+B:(Declaration mergin) -  Quando tem o mesmo nome de interface, elas são unidas

// Interface C
interface IFullName {
  fullName(): string
}

//igual a => type IClient = IPerson & IFullName
//A + B + C: (Extends) - Unit as interfaces
interface IClient extends IPerson, IFullName {}

export class Person implements IPerson {
  constructor(public name: string, public lastName: string) {}
  address: readonly string[]
  age?: number

  fullName(): string {
    return this.name + ' ' + this.lastName
  }
}

//Implementando em objeto
const PersonObj: IClient = {
  name: 'Felipe',
  lastName: 'Ferreira',
  address: ['Centro'],
  age: 37,
  fullName() {
    return this.name + ' ' + this.lastName
  },
}

const person = new Person('Felipe', 'Ferreira')
console.log(person)
console.log(person.fullName())
console.log(PersonObj)
console.log(PersonObj.fullName())
