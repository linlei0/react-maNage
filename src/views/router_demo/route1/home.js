import React from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import About from './about'
import Main from './main'
import Topic from './topic'
export default class  Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>    
                        </li>
                        <li>
                            <Link to="/about">About</Link>    
                        </li>
                        <li>
                            <Link to="/topics">topics</Link>    
                        </li>
                    </ul>
                    <Switch>
                        <Route exact={true} path="/" component={Main}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topic}></Route>
                    </Switch>
                    

                </div>
            </HashRouter>
        )
    }
}