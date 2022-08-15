//Ligação mais forte injeta de uma classe para outra
//Carrinho de compra <>- Produto
class Product {
  constructor(public name: string, public price: number) {}
}

class Cart {
  private readonly products: Product[] = []

  addProducts(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product)
    }
  }

  quantity(): number {
    return this.products.length
  }

  total(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0)
  }
}

const product1 = new Product('Monitor', 1000.0)
const product2 = new Product('Notebook', 1500.0)
const product3 = new Product('Notebook', 1500.0)

const cart = new Cart()
cart.addProducts(product1, product2, product3)
console.log(cart.total())
console.log(cart.quantity())
