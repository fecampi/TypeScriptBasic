// -----------------Type Gard - Checando o código------------
//Exemplo1: Check in Function
function add(a: unknown, b: unknown): number | string {
  //use Type Gard
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }
  return `${a}${b}`
}

console.log(add(1, 5))
console.log(add('a', 'b'))

//Exemplo2 Check in class
type TPerson = {
  type: 'person'
  name: string
}
type TAnimal = {
  type: 'animal'
  cor: string
}
type TPersonOrAnimal = TPerson | TAnimal

export class Client implements TPerson {
  type: 'person' = 'person'
  constructor(public name: string) {}
}

export function printName(obj: TPersonOrAnimal): void {
  // use Type Gard
  // if ('name' in obj) console.log(obj.name);
  // if (obj instanceof Client) console.log(obj.name);
  const { type } = obj
  //use Type Gard
  if (type == 'person') {
    const { name } = obj
    console.log('person', name)
    return
  } else if (type == 'animal') {
    const { cor } = obj
    console.log('animal', cor)
    return
  }
}

printName(new Client('Felipe'))
printName({ type: 'animal', cor: 'blue' })

// ----------typeof e keyof---------
//OBJETO COMO TIPO

const obj = {
  0: 'key 0',
  1: 'key 1',
  2: 'key 2',
  3: 'key 3',
  4: 'key 4',
  5: 'key 5',
  6: 'key 6',
  default: 'default',
}
//TIPO É IGUAL DO OBJETO
type TypeObject = typeof obj
//TIPO É IGUAL O VALOR DA CHAVE
type TypeKey = keyof TypeObject

function getString(key: TypeKey, obj: TypeObject) {
  return obj[key] || obj['default']
}

console.log(getString(0, obj))
console.log(getString(1, obj))
console.log(getString(2, obj))

// console.log(getString(8, obj))

// --------key like type---------
// Espelhando tipos

//Tipo Original Vehicle
type Vehicle = {
  brand: string
  year: number
}

//Tipo Car agora pode utilizar o tipo de Veiculo
type Car = {
  otherBrand: Vehicle['brand']
  otherYear: Vehicle['year']
  name: string
}

const car: Car = {
  otherBrand: 'Name_brand',
  otherYear: 2020,
  name: 'Name_Car',
}

console.log(car)

// -------------------this como tipo-----------
// Builder - GoF
//chamadas em correntes, utilizado
//quando precisamos iniciar um objeto com um constructor que seria muito grande

type TypeMethod = 'get' | 'post' | null
type TypeUrl = string | null
class RequestBuilder {
  private method: TypeMethod = null
  private url: TypeUrl = null

  setMethod(method: 'get' | 'post'): this {
    this.method = method
    return this
  }

  setUrl(url: string): this {
    this.url = url
    return this
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`)
  }
}

const request = new RequestBuilder() // Builder
request.setUrl('http://www.google.com').setMethod('post').send()

// ----------function overload(Não recomendado) --------
//Baseado nos parâmetros que a função recebe ela
//se comporta de maneira diferente
type TypeAdder = {
  //1 - Um Parâmetro
  (x: number): number
  //2- Dois Parâmetros
  (x: number, y: number): number
  //3- Recebendo um array de numbers
  (...arg: number[]): number
}

const adder: TypeAdder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) {
    return args.reduce((s, v) => s + v, 0) + x + (y || 0)
  }
  return x + (y || 0)
}

console.log(adder(1))
console.log(adder(1, 2))
console.log(adder(1, 2, 3))

// -------------Encadeamento opcional e Operador de coalescência nula(saber se existe)-----------
type TypePerson = {
  name: string
  date?: Date
}

const person: TypePerson = {
  name: 'Jhon',
}
//Com o ? temos o encadeamento opcional (preveni em caso de não existir o atributo).
//Com o ?? temos o operador de consciência nula.
//if (undefined, null){return 'not data}
console.log(person.date?.toDateString() ?? 'not data')
