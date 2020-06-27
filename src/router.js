import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Admin from './admin'
import App from './App';
import Login from './views/login'
import Button from './views/ui/button'
export default class Router extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" render={
                        () => <Admin>
                            <Route path="/admin/ui/buttons" component={Button}></Route>
                        </Admin>
                    }></Route>
                </App>
            </HashRouter>
        )
    }
}