export default class User {
  constructor({ displayName, email, emailVerified, phoneNumber, photoURL, uid, categories = [], products = [], sales = [] } = {}) {
    this.displayName = displayName
    this.email = email
    this.emailVerified = emailVerified
    this.phoneNumber = phoneNumber
    this.photoURL = photoURL
    this.uid = uid
    this.categories = categories
    this.products = products
    this.sales = sales
  }
}