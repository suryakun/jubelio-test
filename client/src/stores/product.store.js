import {action, computed, observable} from 'mobx'

export class Product {
    @observable.shallow products = []
    @observable open = false
    @observable product = {}

    constructor(initialProducts) {
        initialProducts.forEach(this.addProduct)
    }

    @action
    setProduct = prod => {
        this.product = prod
    }

    @action
    setModal = state => {
        this.open = state
    }

    @action
    addProduct = product => {
        this.products.push(product)
    }

    @action
    updateProduct = product => {
        const newp = this.products.map(e => {
            if(e.id === product.id) {
                return product
            } else {
                return e
            }
        })
        this.products.replace(newp)
    }

    @action
    deleteProduct = product => {
        this.products.splice(this.products.indexOf(product), 1)
    }


}
