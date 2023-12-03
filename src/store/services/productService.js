import ProductController from '../../controller/ProductController'

const productController = new ProductController()

export const productService = {
  products: null,
  loading: false,

  async create(payload, currentUser) {
    try {
      payload.stock = parseInt(payload.stock)
      payload.price = parseFloat(payload.price)
      const id = await productController.create(payload, currentUser)
      this.products.push({ ...payload, id })
    } catch (error) {
      return console.log(error)
    }
  },

  async get(currentUser) {
    try {
      this.loading = true
      this.products = await productController.get(currentUser)
      this.loading = false
    } catch (error) {
      return console.log(error)
    }
  },

  async update(payload) {
    try {
      await productController.update(payload)
      const products = this.products.filter(product => product.id !== payload.id)
      products.push(payload)
      this.products = products
    } catch (error) {
      return console.log(error)
    }
  },

  async delete(payload, currentUser) {
    try {
      currentUser.products = currentUser.products.filter(id => id !== payload.id)
      this.products = this.products.filter(category => category.id !== payload.id)
      await productController.delete(payload, currentUser)
    } catch (e) {
      return console.log(e)
    }
  }
}