/**
 * Created by nalantianyi on 2016/12/22.
 */
import React, {Component, PropTypes} from 'react';
// 引入 connect 工具函数
import {connect} from 'dva';

import UserList from '../components/Users/UserList';
import UserModal from '../components/Users/UserModal';
import UserSearch from '../components/Users/UserSearch';

//引入样式
import styles from '../Users.less';


function Users({location, dispatch, users}) {
    const {loading, dataSource, total, current, currentItem, modalVisible, modalType}=users;


    const userSearchProps = {};
    const userListProps = {
        total,
        current,
        loading,
        dataSource: dataSource
    };
    const userModalProps = {};
    return (
        <div className={styles.normal}>
            <UserSearch {...userSearchProps}></UserSearch>
            <UserList {...userListProps}></UserList>
            <UserModal {...userModalProps}></UserModal>
        </div>
    );
}
Users.propTypes = {users: PropTypes.object};
//指定订阅数据,这里关联了users
function mapStateToProps({users}) {
    return {users};
}
export  default  connect(mapStateToProps)(Users);