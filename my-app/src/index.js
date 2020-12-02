import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'
import App from './components/App'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const routing = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} />

        </Switch>
    </BrowserRouter>
)
ReactDOM.render(routing, document.getElementById('root'))
