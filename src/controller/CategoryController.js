import BaseController from './BaseController'

export default class CategoryController extends BaseController {
  async create(payload, currentUser) {
    const categoryRef = await super.addDocument('Categories', payload)
    await super.updateDocument('Categories', categoryRef.id, { ...payload, id: categoryRef.id })

    currentUser.categories.push(categoryRef.id)
    await super.updateDocument('Users', currentUser.uid, { categories: currentUser.categories })
    return categoryRef.id
  }

  async get(currentUser) {
    const categories = []
    for(const categoryId of currentUser.categories) {
      const category = await super.getDocument('Categories', categoryId)
      categories.push(category)
    }

    return categories
  }
  
  async update(payload) {
    await super.updateDocument('Categories', payload.id, payload)
  }

  async delete(payload, currentUser, products) {
    await Promise.all([
      super.deleteDocument('Categories', payload.id),
      super.updateDocument('Users', currentUser.uid, {
        categories: currentUser.categories,
        products: currentUser.products
      }),
      ...products.map(product => super.deleteDocument('Products', product.id))
    ])
  }
}
