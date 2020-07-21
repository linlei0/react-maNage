import React from 'react'
import { Card, Carousel, Col } from 'antd'
import './ui.less'
export default class Carouse extends React.Component {
    state = {
        list: []
    }
    render() {
        return (
            <div style={{ width: '100%' }}>
                <Card title="轮播UI" className="card-wrap">
                    <Carousel autoplay className="slider-wrap1">
                        <div>
                            <h3>
                                Ant Motion Banner - React
                            </h3>
                        </div>
                        <div>
                            <h3>
                                Ant Motion Banner - Vue
                            </h3>
                        </div>
                        <div>
                            <h3>
                                Ant Motion Banner - Angular
                            </h3>
                        </div>
                    </Carousel>
                </Card>

                <Card title="轮播UI" className="card-wrap">
                    <Carousel autoplay className="slider-wrap2">
                        <div>
                           <img style={{width: '100%'}} src="/carousel-img/carousel-1.jpg" />
                        </div>
                        <div>
                        <img src="/carousel-img/carousel-2.jpg" />
                        </div>
                        <div>
                        <img src="/carousel-img/carousel-3.jpg" />
                        </div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}