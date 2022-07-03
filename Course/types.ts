/* eslint-disable */
  // Tipos básicos (aqui ocorre inferência de tipos)
  let fullName: string = 'Felipe' // Qualquer tipo de strings: '' "" ``
  let age: number = 33 // 1, 2.01, -2.01, 0x02e7, 0b1010
  let registered: boolean = true // true ou false
  let symbol_x: symbol = Symbol('symbol_x') // symbol

  // Arrays
  let arrayNumber: Array<number> = [1, 2, 3, 4, 5, 6]
  let arrayNumber2: number[] = [1, 2, 3, 4, 5, 6]
  let arrayStrings1: Array<string> = ['a', 'b', 'c']
  let arrayStrings2: string[] = ['a', 'b', 'c']

  // Objetos
  let person: {
    //somente leitura
    readonly fullName: string
    age: number
    //opcional
    registered?: boolean
    showPerson: () => void
    //extender com mais "keys"
    [key: string]: unknown // any
  } = {
    fullName,
    age,
    registered,
    //void. sem retorno
    showPerson(): void {
      console.log(this.fullName + ' ' + this.age)
    },
  }
  person.showPerson()
  //opcional
  person.registered = true
  //extender
  // person.newKey = 09
  console.log(person)

  // Funções
  function sum(x: number, y: number): number {
    return x + y
  }

  const sum1: (x: number, y: number) => number = (x, y) => x + y

  // any, use pouco ;(
  function show(msg: any) {
    return msg
  }

  //void, sem retorno
  function joinString(...args: string[]): void {
    console.log(args.join(' '))
  }

  joinString('Lorem', 'ipsum', 'dolor', 'sit', 'amet')

  //Array
  function mult(...args: Array<number>): number {
    return args.reduce((ac, valor) => ac * valor, 1)
  }
  const result = mult(1, 2, 3)
  console.log(result)

  function mult1(...args: number[]): number {
    return args.reduce((ac, valor) => ac * valor, 1)
  }
  const result1 = mult1(1, 2, 3)
  console.log(result1)

  function concString(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor)
  }
  const concatenacao = concString('a', 'b', 'c')
  console.log(concatenacao)

  function toUpperCase(...args: string[]): string[] {
    return args.map(valor => valor.toUpperCase())
  }
  const upper = toUpperCase('a', 'b', 'c')
  console.log(upper)
  //immutable

  //any
  function squareOf(x: any): number | null {
    //prevenir erros use Null
    return typeof x === 'number' ? x * x : null
  }

  const squareOfTwoString = squareOf('2')
  //se tem any vai ser bom checar  antes...xiii
  if (squareOfTwoString === null) {
    // não pode multiplicar
    console.log('Conta inválida')
  } else {
    //Agora sim pode multiplicar que é numero
    console.log(squareOfTwoString * 100)
  }

  //never (nunca)
  export function createError(): never {
    throw new Error('error x')
  }

  //enum
  enum Cores {
    VERMELHO = 3,
    AZUL = 2,
    AMARELO = 1,
  }

  enum Cores {
    LARANJA,
    VERDE,
    MARROM,
  }

  //tipo de cores
  function getColor(cor: Cores): void {
    console.log(Cores[cor])
    console.log(Cores.AMARELO)
  }

  getColor(1)

  //unknown um any mais seguro
  let x: unknown

  x = '100'
  x = 10_000
  const y = 100

  //verifica o tipo
  if (typeof x === 'number') {
    console.log(x + y)
  }

  // union types(mais de um tipo - má pratica)
  //quebra varias regras essa função!!
  function addOrConcat(a: number | string | boolean, b: number | string | boolean): number | string {
    const aIsNumber = typeof a === 'number'
    const bIsNumber = typeof b === 'number'
    const aAndBAreNumber = aIsNumber && bIsNumber
    return aAndBAreNumber ? a + b : `${a}${b}`
  }

  console.log(addOrConcat(10, 20))
  console.log(addOrConcat('10', '20'))

  //Tipos literais
  function getColorInList(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
    return cor
  }
  console.log('color: ', getColorInList('Vermelho'))

  //atributo como constante como um tipo literal
  const client = {
    name: 'Felipe' as const,
    lastName: 'Campinho',
  }
  // Não da pra atribuir outro valor );
  // client.name = "Bill"
  console.log(client)

  //Alias - Interface
  type Age = number
  type PersonType = {
    name: string
    age?: Age
  }
  const commonPerson: PersonType = {
    name: 'Felipe',
  }
  console.log(commonPerson)

  //Alias - Union Type
  type RGB = 'RED' | 'GREEN' | 'BLUE'
  type CMYK = 'CYAN' | 'MAGENTA' | 'YELLOW' | 'BLACK'
  type Colors = RGB | CMYK
  function printColor(color: Colors) {
    console.log(color)
  }

  printColor('BLUE')

  //Alias - intersection types
  //exemple1
  type IsName = { name: string }
  type IsLastName = { lastName: string }
  type IsAge = { age: number }
  type Person3 = IsName & IsLastName & IsAge // AND
  const person2: Person3 = {
    name: 'Felipe',
    lastName: 'Ferreira',
    age: 35,
  }
  console.log(person2)
  //exemple2
  type AB = 'A' | 'B'
  type AC = 'A' | 'C'
  type AD = 'D' | 'A'
  type isA = AB & AC & AD
  function printLetter(letter: isA) {
    console.log(letter)
  }
  printLetter('A')

  //Function
  type CallbackFn = (letter: string) => string

  function doubleString(letter: string, callbackfn: CallbackFn): string {
    return callbackfn(letter + letter)
  }

  const abcMapped = doubleString('a', letter => letter.toUpperCase())
  console.log(abcMapped)

  //Structural-yping (preciso de um objeto que esse tipo tem, se tiver a mais, de boas..)
  type User = { username: string; password: string }
  type VerifyIsUserFn = (user: User) => boolean
  const verifyIsUser: VerifyIsUserFn = user => {
    const userDB = { username: 'Felipe', password: '123456' }
    return user.username === userDB.username && user.password === userDB.password
  }

  const user = { username: 'Felipe', password: '123456', age: '10' }

  const isUser = verifyIsUser(user)
  //Isso já não é possivel
  // const user1 = { username: 'Maria', password: 123456 }
  // const isUser1 = verifyIsUser(user1)
  console.log(isUser)

  //type-assertions.
  type PersonAssertion = {
    name: string
    age?: Age
  }

  const person3 = {
    name: 'Felipe',
    lastName: 'Ferreira',
    age: 35,
  } as PersonAssertion

  console.log(person3)

  //Thins in Function
  export function thisInFunction(this: Date, nome: string, age: number): void {
    console.log(this)
    console.log(nome, age)
  }
  //Primeiro argumento quem é o Call, outros são os argumentos da função
  thisInFunction.call(new Date(), 'Felipe', 35)
  //Primeiro argumento quem é o Call, e no array são os argumentos da função
  thisInFunction.apply(new Date(), ['Felipe', 35])
