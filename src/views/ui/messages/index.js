import React from 'react'
import { Card, Button, message } from 'antd'
import './../ui.less'
export default class Messages extends React.Component {
    handleOpenMessage = (type)=> {
        message[type](type)
    }
    render() {
        return (
            <div style={{width: '100%'}}>
                <Card title="全局提示框" className="card-warp">
                    <Button type="primary" onClick={()=>this.handleOpenMessage('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleOpenMessage('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleOpenMessage('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.handleOpenMessage('error')}>Error</Button>
                    <Button type="primary" onClick={()=>this.handleOpenMessage('loading')}>Loading</Button>
                </Card>
            </div>
        )
    }
}
