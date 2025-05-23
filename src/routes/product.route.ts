import { Router } from 'express'
import { getAllProduct, createProduct, getProductById } from '../controllers/product.controller'

const router = Router()

router.get('/', getAllProduct)
router.post('/', createProduct)
router.post('/detail', getProductById)

export default router
