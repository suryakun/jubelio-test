import { createContext } from 'react'
import { Product } from '../stores/product.store'

export const StoreContext = createContext({})
export const StoreProvider = StoreContext.Provider
