import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Admin from './admin'
import App from './App';
import Login from './views/login'
import Buttons from './views/ui/button'
import Modals from './views/ui/modals'
import Notice from './views/ui/notice'
import Loadings from './views/ui/loadings'
import Messages from './views/ui/messages'
import Tabs from './views/table/basic'
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
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }></Route>
                </App>
            </HashRouter>
        )
    }
}