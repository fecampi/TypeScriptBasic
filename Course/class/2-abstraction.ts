export abstract class Actor {
  protected abstract emoji: string
  protected lifeEmoji = '\u2764\uFE0F'
  protected emojiForce = '\uD83C\uDFF9'

  constructor(protected nome: string, protected force: number, protected life: number) {}

  attack(actor: Actor): void {
    this.action()
    actor.loseLife(this.force)
  }

  loseLife(force: number): void {
    this.life -= force
    console.log(`${this.emoji} - ${this.lifeEmoji.repeat(this.life)} `)
    console.log()
  }

  abstract action(): void
}

export class Archer extends Actor {
  protected emoji = '\uD83D\uDC68'

  action(): void {
    console.log(`${this.emoji} - ${this.emojiForce}`)
  }
}
export class Enemy extends Actor {
  protected emoji = '\u{1F9DF}'

  action(): void {
    console.log(`${this.emoji} - ${this.emojiForce}`)
  }
}

const archer = new Archer('Archer', 2, 10)
const enemy = new Enemy('Enemy', 1, 10)

archer.attack(enemy)
archer.attack(enemy)
archer.attack(enemy)
enemy.attack(archer)
enemy.attack(archer)
enemy.attack(archer)
