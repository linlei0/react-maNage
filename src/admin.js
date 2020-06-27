import React from 'react';
import './App.less';
import {Row,Col} from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
export default class Admin extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Row className="container">
                <Col span={4} className="nav-left">
                <NavLeft></NavLeft>
                </Col>
                <Col span={20} className="main">
                  <Header></Header>
                  <Row className="content">
                     {
                         console.log(this.props),
                     this.props.children
                     }
                  </Row>
                  <Footer></Footer>
                </Col>
            </Row> 
        );
    }
  
}


