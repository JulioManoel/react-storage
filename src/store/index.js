import { userService } from './services/userService'
import { categoryService } from './services/categoryService'
import { productService } from './services/productService'

export const store = {
  user: userService,
  category: categoryService,
  product: productService
}