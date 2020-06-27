import React from 'react'
export default class  Info extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                this is Info.<br />
                这里是获取动态路由的值{this.props.match.params.id}
            </div>
        )
    }
}