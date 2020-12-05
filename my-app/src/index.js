import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'
import App from './components/App'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Producto from './components/Products';

const routing = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} />

            <Route path="/ProductDetails/:id" component={ProductDetails} />
        </Switch>
    </BrowserRouter>
)
ReactDOM.render(routing, document.getElementById('root'))
