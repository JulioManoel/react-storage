import BaseController from './BaseController'

export default class CategoryController extends BaseController {
  async create(payload, currentUser) {
    const categoryRef = await super.addDocument('Categories', payload)
    await super.updateDocument('Categories', categoryRef.id, { ...payload, id: categoryRef.id })

    currentUser.categories.push(categoryRef.id)
    await super.updateDocument('Users', currentUser.uid, { categories: currentUser.categories })
  }
  
  async update(payload) {
    await super.updateDocument('Categories', payload.id, payload)
  }

  async get(currentUser) {
    const categories = []

    for(const categoryId of currentUser.categories) {
      const category = await super.getDocument('Categories', categoryId)
      categories.push(category)
    }

    return categories
  }
}
