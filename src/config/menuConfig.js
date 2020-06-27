import React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

export default [
    {
        title: '首页',
        key: '/menu/home',
        
    },
    {
        title: 'UI',
        key: '/admin/ui',
        children: [
            {
                title: '按钮',
                key: '/admin/ui/buttons',
            }
        ]
    }
]