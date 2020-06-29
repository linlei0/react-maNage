import React from 'react'
import { getTableList } from '../../../api/table'
import { Card, Button, Radio } from 'antd'
import { 
    SearchOutlined,
    PlusOutlined, 
    EditOutlined, 
    DeleteOutlined, 
    CloudDownloadOutlined,
    RightOutlined,
    LeftOutlined 
} from '@ant-design/icons';
import './../ui.less'
export default class  Buttons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            value: 'small'
        }
    }
    componentWillMount() {
        const postData = {
            pageSize: 10,
            pageNum: 1,
            query:'query'
        }
        getTableList(postData).then(({data})=> {
            console.log(data)
        })  
    }
    handleColseLoading = ()=> {
        this.setState({
            loading: !this.state.loading
        })
    }
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      }
    render() {
        return (
            <div style={{width: '100%'}}>
                <Card title="基础按钮" className="card-warp">
                    <Button type="primary">Imooc</Button>
                    <Button >Imooc</Button>
                    <Button type="dashed">Imooc</Button>
                    <Button type="danger">Imooc</Button>
                    <Button disabled>Imooc</Button>
                </Card>    
                <Card title="图形按钮" className="card-warp">
                    <Button icon={<PlusOutlined />}>创建</Button>
                    <Button icon={<EditOutlined />}>编辑</Button>
                    <Button icon={<DeleteOutlined />}>删除</Button>
                    <Button shape="circle" icon={<SearchOutlined/>}></Button>
                    <Button type="primary" icon={<SearchOutlined/>}>搜索</Button>
                    <Button type="primary" icon={<CloudDownloadOutlined />}>下载</Button>
                </Card>

                <Card title="loading按钮" className="card-warp">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button icon={<DeleteOutlined />} loading={this.state.loading}>删除</Button>
                    <Button shape="circle" icon={<SearchOutlined/>}loading={this.state.loading}></Button>
                    <Button type="primary" icon={<SearchOutlined/>} loading={this.state.loading}>搜索</Button>
                    <Button type="primary"  onClick={this.handleColseLoading}>关闭</Button>
                </Card>
                <Card title="按钮组">
                    <Button.Group>
                        <Button type="primary" icon={<LeftOutlined />}>Back</Button>
                        <Button type="primary" icon={<RightOutlined />}>Next</Button>
                    </Button.Group>    
                </Card>
                <Card title="按钮尺寸" className="card-warp">
                <Radio.Group onChange={this.onChange} value={this.state.value}>
                    <Radio value={'small'}>小</Radio>
                    <Radio value={'middle'}>中</Radio>
                    <Radio value={'large'}>大</Radio>
                </Radio.Group>
                <Button type="primary" size={this.state.value}>Imooc</Button>
                <Button type="dashed" size={this.state.value}>Imooc</Button>
                <Button type="danger" size={this.state.value}>Imooc</Button>
                </Card>
            </div>
        )
    }
}