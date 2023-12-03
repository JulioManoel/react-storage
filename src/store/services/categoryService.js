import CategoryController from '../../controller/CategoryController'

const categoryController = new CategoryController()

export const categoryService = {
  categories: null,
  loading: false,

  async create(payload, currentUser) {
    try {
      const id = await categoryController.create(payload, currentUser)
      this.categories.push({ ...payload, id })
    } catch (error) {
      return console.log(error)
    }
  },

  async get(currentUser) {
    try {
      this.loading = true
      this.categories = await categoryController.get(currentUser)
      this.loading = false
    } catch (error) {
      return console.log(error)
    }
  },

  async update(payload) {
    try {
      await categoryController.update(payload)
      const categories = this.categories.filter(category => category.id !== payload.id)
      categories.push(payload)
      this.categories = categories
    } catch (error) {
      return console.log(error)
    }
  },

  async delete(payload, currentUser, product) {
    try {
      currentUser.categories = currentUser.categories.filter(id => id !== payload.id)
      currentUser.products = product.products.filter(product => product.category !== payload.id).map(product => product.id)
      this.categories = this.categories.filter(category => category.id !== payload.id)
      const products = product.products.filter(product => product.category === payload.id)
      await categoryController.delete(payload, currentUser, products)
      product.products = product.products.filter(product => product.category !== payload.id)
    } catch (e) {
      return console.log(e)
    }
  }
}