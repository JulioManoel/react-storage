import CategoryController from '../../controller/CategoryController'

const categoryController = new CategoryController()

export const categoryService = {
  categories: null,

  async create(payload, currentUser) {
    try {
      await categoryController.create(payload, currentUser)
      this.categories.push(payload)
    } catch (error) {
      return console.log(error)
    }
  },

  async update(payload) {
    try {
      console.log(payload)
      await categoryController.update(payload)
      let category = this.categories.find(category => category.id === payload.id)
      category = payload
    } catch (error) {
      return console.log(error)
    }
  },

  async get(currentUser) {
    try {
      this.categories = await categoryController.get(currentUser)
    } catch (error) {
      return console.log(error)
    }
  }
}