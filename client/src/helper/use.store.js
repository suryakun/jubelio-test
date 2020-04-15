import { useContext } from 'react'
import { StoreContext } from './store.provider'
import { Product } from '../stores/product.store'

export const useStore = () => useContext(StoreContext)
