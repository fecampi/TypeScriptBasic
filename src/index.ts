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
