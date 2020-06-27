import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Utils from '../../utils/utils'
export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '林磊'
        }
    }
    componentWillMount() {
        this.getSysTime()
    }
    getSysTime() {
        let sysTime = Utils.formateDate(Date.now())
        this.setState({
            sysTime
        })
        setTimeout(()=>{
            this.getSysTime()
        },1000)
    }
    render(){
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col> 
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col className="weather" span={20}>
                        <span className="date">{this.state.sysTime}</span>&emsp;&nbsp;
                        <span >晴转多云</span>
                    </Col>
                </Row>

            </div>
        )
    }
}