// Type Gard - Checando o codigo
//Check in Function
function add(a: unknown, b: unknown): number | string {
  //use Type Gard
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }
  return `${a}${b}`
}

console.log(add(1, 5))
console.log(add('a', 'b'))

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
