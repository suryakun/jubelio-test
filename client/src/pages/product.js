import React from 'react'
import axios from 'axios'
import { useStore } from '../helper/use.store'
import { useObserver } from 'mobx-react'
import { Card, Icon, Image, Button, Modal } from 'semantic-ui-react'
import EditProduct from '../components/product.edit'

function Item(props) {
    const item = props.product
    const store = useStore()

    const deleteItem = async () => {
        const confirm = window.confirm("Are you sure want to delete this item?")
        if(confirm) {
            const response = await axios.delete(`/api/products/${item.id}`)
            if(response.status === 200) {
                store.deleteProduct(item)
            }
        }
    }

    return (
        <Card>
            <Image src={item.pic} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{item.price}</span>
                </Card.Meta>
                <Card.Description>
                    <div dangerouslySetInnerHTML={{ __html: item.description && item.description.substr(0, 150) + '....' }} />
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button icon onClick={() => {
                    store.setProduct(item)
                    store.setModal(true)}
                } ><Icon name="edit"/>Edit</Button>
                <Button icon onClick={deleteItem}><Icon name="remove" />Remove</Button>
            </Card.Content>
        </Card>
    )
}

export default function Product() {
    const store = useStore()
    const { products } = store
    return (
        useObserver(() => {
            return (
                <React.Fragment>
                    <Card.Group itemsPerRow={4}> 
                        {products.map((e, i) => <Item key={i} product={e} />)}
                    </Card.Group>
                <Modal open={store.open}>
                    <EditProduct />
                </Modal>
            </React.Fragment>
            )
        })
    )
}
