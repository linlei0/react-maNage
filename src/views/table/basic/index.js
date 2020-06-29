import React from 'react'
import { Table } from 'antd'
export default class BasicTable extends React.Component {
    constructor(props) {
        super(props)
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
            } 
        ]
        this.state = {
            columns,
            dataSource: []
        }
    }

    render() {
        const { dataSource,columns } = this.state
        return (
            <Table style={{width: '100%'}} dataSource={dataSource} columns={columns}></Table>
        )
    }
}