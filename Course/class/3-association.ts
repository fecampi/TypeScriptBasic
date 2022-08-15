//inversion dependency: Writer não aponta para a classe concreta (Pen ou Typewriter)
//Associação
//classes são independete
// (Writter)->(Toll)
// (Pen)-|>(Toll)
// (Typewriter)-|>(Toll)
export abstract class Tool {
  abstract execute(): void
}

export class Pen extends Tool {
  execute(): void {
    console.log(`Writing...`)
  }
}

export class Typewriter extends Tool {
  execute(): void {
    console.log(`Typing...`)
  }
}

export class Writer {
  private _tool: Tool | null = null

  set tool(tool: Tool | null) {
    this._tool = tool
  }

  get tool(): Tool | null {
    return this._tool
  }

  write(): void {
    if (this.tool === null) {
      console.log('Error...')
      return
    }
    this.tool.execute()
  }
}

const writer = new Writer()
const pen = new Pen()
const typewriter = new Typewriter()

writer.tool = pen
writer.write()
writer.tool = typewriter
writer.write()
writer.tool = null
writer.write()
