import React from 'react'
import {Link} from 'react-router-dom'
export default class  Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                this is main.
                <Link to="/main/123">info</Link>
                {this.props.children}
            </div>
        )
    }
}