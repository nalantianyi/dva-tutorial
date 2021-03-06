/**
 * Created by nalantianyi on 2016/12/22.
 */
import { query } from '../services/users';

export default {
    namespace: 'users',
    state: {
        list: [],
        total: null,
        loading: false,
        current: null,
        currentItem: {},
        modalVisible: false,
        modalType: 'create'
    },
    effects: {
        *query({payload}, {select, call, put}){
            yield put({type: 'showLoading'});
            const {data}=yield call(query);
            if (data) {
                yield put({
                    type: 'querySuccess',
                    payload: {
                        list: data.data,
                        total: data.page.total,
                        current: data.page.current
                    }
                });
            }
        },
        *create(){
        },
        *'delete'(){
        },
        *update(){
        }
    },
    reducers: {
        showLoading(){
        },
        showModal(){
        },
        hideModal(){
        },
        querySuccess(state){
            const mock = {
                total: 3,
                current: 1,
                loading: false,
                dataSource: [
                    {name: '张三', age: 23, address: '南京'},
                    {name: '李四', age: 24, address: '杭州'},
                    {name: '小鸡', age: 27, address: '南京'}]
            };
            return {...state, ...mock, loading: false};
        },
        createSuccess(){


        },
        deleteSuccess(){
        },
        updateSuccess(){
        }
    },
    subscriptions: {
        setup({dispatch, history}){
            history.listen(location => {
                if (location.pathname === '/users') {
                    dispatch({type: 'querySuccess', payload: {}});
                }
            });
        }
    }
}