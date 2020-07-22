import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Admin from './admin'
import App from './App';
import Login from './views/login'
// ui组件
import Buttons from './views/ui/button'
import Modals from './views/ui/modals'
import Notice from './views/ui/notice'
import Loadings from './views/ui/loadings'
import Messages from './views/ui/messages'
import Tabs from './views/ui/tabs'
import Gallery from './views/ui/gallery'
import Carouse from './views/ui/carousel'
// form组件
import FormLogin from './views/form/login'

import NoMatch from './views/noMatch'
export default class Router extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={ Login }></Route>
                    <Route path="/ui" render={
                        () => <Admin>
                            <Switch>
                                <Route path="/ui/buttons" component={ Buttons }></Route>
                                <Route path="/ui/tabs" component={ Tabs }></Route>
                                <Route path="/ui/modals" component={ Modals }></Route>
                                <Route path="/ui/loadings" component={ Loadings }></Route>
                                <Route path="/ui/notification" component={ Notice }></Route>
                                <Route path="/ui/messages" component={ Messages }></Route>
                                <Route path="/ui/gallery" component={ Gallery }></Route>
                                <Route path="/ui/carousel" component={ Carouse }></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }></Route>

                    <Route path="/form" render={
                        () => <Admin>
                            <Switch>
                                <Route path="/form/login" component={ FormLogin }></Route>
                                
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }></Route>
                    <Redirect to="ui/buttons" />
                </App>
            </HashRouter>
        )
    }
}