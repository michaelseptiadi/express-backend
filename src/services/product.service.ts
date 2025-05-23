interface Product {
  id: number;
  product_name: string;
}

let product: Product[] = [
  { id: 1, product_name: 'Nasi Goreng' },
  { id: 2, product_name: 'Mie Kuah' },
  { id: 3, product_name: 'Kwetiau' },
  { id: 4, product_name: 'Bihun' },
]

export const getProduct = (): Product[] => {
  return product
}

export const getProductById = (id: number): Product | undefined => {
  return product.find(product => product.id == id)
}

export const createProduct = (product_name: string): Product => {
  const newUser = { id: product.length + 1, product_name }
  product.push(newUser)
  return newUser
}
