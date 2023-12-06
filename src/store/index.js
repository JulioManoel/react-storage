import { userService } from './services/userService'
import { categoryService } from './services/categoryService'
import { productService } from './services/productService'
import { saleService } from './services/saleService'

export const store = {
  user: userService,
  category: categoryService,
  product: productService,
  sale: saleService
}