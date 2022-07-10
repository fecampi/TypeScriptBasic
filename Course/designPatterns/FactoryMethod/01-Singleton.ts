// Singleton: só ter uma instancia da classe
export class Database {
  //Atributo estatico para armazenar a instancia
  private static database: Database

  //Construtor privado
  private constructor(private host: string, private user: string, private password: string) {}

  connect(): void {
    console.log(`Connected: ${this.host}, ${this.user}, ${this.password}`)
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Returning instance already created..')
      return Database.database
    }
    console.log('Creating new instance.')
    Database.database = new Database(host, user, password)
    return Database.database
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456')
db1.connect()

const db2 = Database.getDatabase('localhost', 'root', '123456')
db2.connect()

console.log(`Same Database: ${db1 == db2}`)
