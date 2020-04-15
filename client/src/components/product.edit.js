import React, { useState } from 'react'
import { useStore } from '../helper/use.store'
import { Button, Checkbox, Form, Modal, Image } from 'semantic-ui-react'
import axios from 'axios'

const ProductEdit = (props) => {
    const store = useStore()
    const { updateProduct, products, setModal, product } = store

    const [name, setName] = useState(product.name)
    const [price, setPrice] = useState(product.price)
    const [description, setDescription] = useState(product.description)

    const edit = async () => {
        const prod = {...product, name, price, description }
        const response = await axios.put(`/api/products/${prod.id}`, {product: prod})
        console.log(response)
        if(response.status === 200) {
            updateProduct(prod)
            setModal(false)
        }
    }

    return (
        <React.Fragment>
            <Modal.Header>Edit Product</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Image wrapped size="small" src={product.pic} />
                    <Form onSubmit={edit}>
                        <Form.Field>
                            <label>Name</label>
                            <input placeholder='Name' value={name} onChange={e => setName(e.target.value)}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Price</label>
                            <input placeholder='Price' value={price} onChange={e => setPrice(e.target.value)}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Description</label>
                            <input placeholder='Description' value={description} onChange={e => setDescription(e.target.value)}/>
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                        <Button onClick={() => store.setModal(false)}>Close</Button>
                    </Form>
                </Modal.Description>
            </Modal.Content>
        </React.Fragment>
    )
}

export default ProductEdit
