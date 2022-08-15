//Uma classe não existe sem a outra..uma classe está na outra
// car <|>- engine
class Engine {
  on(): void {
    console.log('Engine on...')
  }

  increase(): void {
    console.log('Engine +...')
  }

  reduce(): void {
    console.log('Engine -...')
  }

  off(): void {
    console.log('Engine off...')
  }
}

class Car {
  private readonly engine = new Engine()

  on(): void {
    this.engine.on()
  }

  increase(): void {
    this.engine.increase()
  }

  reduce(): void {
    this.engine.reduce()
  }

  off(): void {
    this.engine.off()
  }
}

const car = new Car()
car.on()
car.increase()
car.reduce()
car.off()
