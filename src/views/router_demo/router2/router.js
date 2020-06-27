import React from 'react'
import { HashRouter as Router,Route, Link } from 'react-router-dom'
import About from './../route1/about'
import Main from './main'
import Topic from './../route1/topic'
import Home from './home'
export default class Irouter extends React.Component {
    render() {
        return (
            <Router>
                <Home>
                    {/* <Route exact={true} path="/" component={Main}></Route> */}
                    {/* 嵌套路由 */}
                    <Route  path="/main" render={()=><Main>
                        <Route path="/main/a" component={About}></Route>
                    </Main>}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topic}></Route>
                </Home>
            </Router>
        )
    }
}