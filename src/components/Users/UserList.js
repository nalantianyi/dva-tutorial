/**
 * Created by nalantianyi on 2016/12/26.
 */
import React, {PropTypes} from 'react';
//引入 antd的 ui 组件
import {Table, message, Popconfirm} from 'antd';
//无状态组件
const UserList = ({total, current, loading, dataSource}) => {
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a href="#">{text}</a>
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address'
        },
        {
            title: '操作',
            key: 'operation',
            render: (text, record) =>
                <p>
                    <a onClick={() => {
                    }}>编辑</a>&nbsp;
                    <Popconfirm title="确定要删除吗?" onConfirm={() => {
                    }}>
                        <a>删除</a>
                    </Popconfirm>
                </p>
        }];
    //定义分页对象
    const pagination = {
        total,
        current,
        pageSize: 10,
        onChange: () => {
        }
    };
    return (
        <div>
            <Table columns={columns} dataSource={dataSource} loading={loading} rowKey={record => record.id}
                   pagination={pagination}></Table>
        </div>
    );


};


export default UserList;