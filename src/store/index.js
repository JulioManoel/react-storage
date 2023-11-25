import { userService } from './services/userService'
import { categoryService } from './services/categoryService'

export const store = {
  user: userService,
  category: categoryService
}