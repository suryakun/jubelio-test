import React, {useEffect} from 'react';
import axios from 'axios'
import ProductPage from './pages/product'
import {Switch, Route} from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Header from './components/header'

function App() {
    return (
        <Container >
            <Header />
            <Switch>
                <Route exact path="/" component={ProductPage} />
            </Switch>
        </Container>
    );
}

export default App;
