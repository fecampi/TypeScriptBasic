//Restrições em genericos

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
