import React from 'react'
import { Card, Row, Col } from 'antd'
import './ui.less'
export default class Gallery extends React.Component {
    state = {
        list: []
    }
    // componentDidMount(){
    //     this.setState({
    //         list: this.getImageList()
    //     })
    // }
    getImageList = () => {
        let arr = []
        let result = []
        for (let i = 1; i < 21; i++) {
            arr.push(i + '.png')
            if (i % 5 == 0) {
                result = [...result, [...arr]]
                arr = []
            }

        }
        return result
    }
    render() {
        const img = this.getImageList()
        const imgList = img.map(list => list.map(item =>
            <Card cover={<img src={'/gallery/' + item}></img>}>
                <Card.Meta
                    title="React Admin"
                    description="Content"
                />
            </Card>))
        console.log(imgList)
        return (
            <div className="card-wrap">
                <Row gutter={10}>
                    {
                        imgList.map((item, index) => {
                            return <Col md={6}>
                                {item}
                            </Col>
                        })
                    }
                </Row>
            </div>
        )
    }
}