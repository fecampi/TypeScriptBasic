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
