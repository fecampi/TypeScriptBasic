//1 - Abstração
// Isolar de um objeto somente os conceitos
// que são necessários para o funionamento do programa
class Pessoa {
  private name: string
  private fullName: string
  constructor(name: string, fullName: string) {
    this.name = name
    this.fullName = fullName
  }
}

const pessoa = new Pessoa('Felipe', 'Ferreira')
console.log(pessoa)

//2 - Encapsulamento
//Ocultar partes internas de um objeto
//e exibir apenas o necessário para o uso externo

class RemoteControl {
  constructor(private powerStatus = false) {}

  public turnOn(): void {
    this.powerStatus = true
  }

  public turnOff(): void {
    this.powerStatus = false
  }

  public getStatus(): boolean {
    return this.powerStatus
  }
}

const remoteControl = new RemoteControl(true)
console.log(`remote control state: ${remoteControl.getStatus()}`)

//Herança
// Passar características de um objeto para outro
abstract class Tunner {
  constructor(public name: string) {}
  abstract changeChannel(): void
}
class DigitalModulator extends Tunner {
  changeChannel(): void {
    console.log(`${this.name} - changeChannel`)
  }
}

class AnalogicModulator extends Tunner {
  changeChannel(): void {
    console.log(`${this.name} - changeChannel`)
  }
}

//Polimorfismo
//Habilidade de assumir diferentes formas
class ChannelChanger {
  public playSound(tunner: Tunner): void {
    tunner.changeChannel()
  }
}
const dog = new DigitalModulator('Panasonic 2023')
const cat = new AnalogicModulator('Sony 2019')

const channelChanger = new ChannelChanger()
channelChanger.playSound(dog)
channelChanger.playSound(cat)
