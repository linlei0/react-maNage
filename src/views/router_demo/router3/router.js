import React from 'react'
import { HashRouter as Router,Route, Switch } from 'react-router-dom'
import About from './../route1/about'
import Main from './main'
import Topic from './../route1/topic'
import Home from './home'
import Info from './info'
import NoMatch from './noMatch'
export default class Irouter extends React.Component {
    render() {
        return (
            <Router>
                <Home>
                    {/* <Route exact={true} path="/" component={Main}></Route> */}
                    {/* 嵌套路由 */}
                    <Switch>
                        <Route  path="/main" render={()=><Main>
                            <Route path="/main/:id" component={Info}></Route>
                        </Main>}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topic}></Route>
                        <Route  component={NoMatch}></Route>
                    </Switch>
                    
                </Home>
            </Router>
        )
    }
}