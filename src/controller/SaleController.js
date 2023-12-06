import BaseController from './BaseController'

export default class SaleController extends BaseController {
  // async create(payload, currentUser) {
  //   const productRef = await super.addDocument('Products', payload)
  //   await super.updateDocument('Products', productRef.id, { id: productRef.id })
  //   currentUser.products.push(productRef.id)
  //   await super.updateDocument('Users', currentUser.uid, { products: currentUser.products })
  //   return productRef.id
  // }

  // async get(currentUser) {
  //   const products = []
  //   for(const productId of currentUser.products) {
  //     const product = await super.getDocument('Products', productId)
  //     products.push(product)
  //   }

  //   return products
  // }
  
  // async update(payload) {
  //   await super.updateDocument('Products', payload.id, payload)
  // }

  // async delete(payload, currentUser) {
  //   await super.deleteDocument('Products', payload.id)
  //   await super.updateDocument('Users', currentUser.uid, {
  //     products: currentUser.products
  //   })
  // }
}
