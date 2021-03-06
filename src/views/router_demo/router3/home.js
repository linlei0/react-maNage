import React from 'react'
import {  Link} from 'react-router-dom'

export default class  Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <div>
                    <ul>
                        <li>
                            <Link to="/main">Home1</Link>    
                        </li>
                        <li>
                            <Link to="/about">About1</Link>    
                        </li>
                        <li>
                            <Link to="/topics">topics1</Link>    
                        </li>
                        <li>
                            <Link to="/mock">topics1</Link>    
                        </li>
                    </ul>
                    {this.props.children}
                </div>
        )
    }
}