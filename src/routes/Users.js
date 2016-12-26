/**
 * Created by nalantianyi on 2016/12/22.
 */
import React, {Component, PropTypes} from 'react';

import UserList from '../components/Users/UserList';
import UserModal from '../components/Users/UserModal';
import UserSearch from '../components/Users/UserSearch';

//引入样式
import styles from '../Users.less';


function Users() {
    const userSearchProps = {};
    const userListProps = {
        total: 3,
        current: 1,
        loading: false,
        dataSource: [
            {name: '张三', age: 23, address: '南京'},
            {name: '李四', age: 24, address: '杭州'},
            {name: '小鸡', age: 27, address: '南京'}]
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
Users.propTypes = {};
export  default  Users;