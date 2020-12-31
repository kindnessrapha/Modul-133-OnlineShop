import {Product} from "./product.ts";

export type ShoppingCart = {
    id: string
    products: Product[]
    //key: productId, value: productAmount
    productAmount: Map<string, number>
}