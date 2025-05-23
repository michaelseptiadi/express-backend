import { Request, Response } from 'express'
import * as productService from '../services/product.service'

export const getAllProduct = (req: Request, res: Response) => {
    const users = productService.getProduct()
    res.json(users)
}

export const createProduct = (req: Request, res: Response) => {
    const { name } = req.body
    if (!name) {
        res.status(400).json({ message: 'Product name is required' })
    } else {
        const newProduct = productService.createProduct(name)
        res.status(201).json(newProduct)
    }
}

export const getProductById = (req: Request, res: Response) => {
    const {id} = req.body
    if(!id){
        res.status(400).json({message: 'Product not found'})
    }else{
        const productDetail = productService.getProductById(id)
        if(productDetail){
            res.status(201).json(productDetail)
        }else{
            res.status(400).json({message: 'Product not found'})
        }
    }
}
