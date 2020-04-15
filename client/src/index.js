import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {StoreProvider} from './helper/store.provider'
import { Product } from './stores/product.store'
import axios from 'axios'
import 'semantic-ui-css/semantic.min.css'

const getData = async () => {
    const response = await axios.get('/api/products')
    const list = response.data
    console.log(list)

    const productList = new Product(list)

    window.productList = productList

    ReactDOM.render(
        <StoreProvider value={productList}>
            <BrowserRouter>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </BrowserRouter>
        </StoreProvider>,
        document.getElementById('root')
    );
}

getData()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
