//Public: pode ser acessado por qualquer outra classe
//Private: pode ser acessado apenas pela classe.
//Protected: Pode ser acessado pela classe e pelas classes derivadas.
//readonly: Não pode ser alterado

//Class Person
//Atributes
// + name: string
// + lastName: string
// - age: string
// # cpf: strings
//Operations
// + getAge(): number
// + getCpf(): string
// + getFullName(): string

//Class Employee extends Person
//Operations
// + getFullName(): string

//Class  Visitor extends Person
//Operations
// + getFullName(): string
// + verifyIsAuthorized(): string

//versão longa
export class PersonFull {
  protected name: string
  protected lastName: string
  protected cpf: string
  constructor(name: string, lastName: string, cpf: string) {
    this.name = name
    this.lastName = lastName
    this.cpf = cpf
  }
}

//versão curta
export class Person {
  static ageDefault = 0
  static cpfDefault = '000.000.000-00'
  constructor(protected name: string, protected lastName: string, private age: number, private _cpf: string) {
    this.cpf = _cpf
  }

  getAge(): number {
    return this.age
  }

  // getters and setters
  set cpf(cpf: string) {
    this._cpf = cpf
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '')
  }

  getFullName(): string {
    return this.name + ' ' + this.lastName
  }
  //Static Factory Method
  static newPersonDefault(name: string, lastName: string): Person {
    return new Person(name, lastName, Person.ageDefault, Person.cpfDefault)
  }
}

export class Employee extends Person {
  override getFullName(): string {
    return 'Employee: ' + this.name + ' ' + this.lastName
  }
}
export class Visitor extends Person {
  constructor(name: string, lastName: string, age: number, cpf: string, public authorized: boolean) {
    super(name, lastName, age, cpf)
  }
  override getFullName(): string {
    console.log('-getFullName in Visitor-')
    const result = super.getFullName()
    return 'VISITOR: ' + result
  }

  verifyIsAuthorized(): string {
    return this.authorized ? 'Autorized' : 'Not Authorized'
  }
}

const person = new Person('Felipe1', 'Ferreira', 31, '000.000.000-00')
person.cpf = '123.456.798-99'
console.log(person.cpf)

const employee = new Employee('Felipe2', 'Ferreira', 32, '000.000.000-00')
const visitor = new Visitor('Felipe3', 'Ferreira', 33, '000.000.000-00', true)

console.log(person.getFullName())
console.log(employee.getFullName())
console.log(visitor.getFullName())
console.log(visitor.verifyIsAuthorized())
// Static
const personDefault = Person.newPersonDefault('Carlos', 'Ferreira')
console.log(personDefault.getFullName())
