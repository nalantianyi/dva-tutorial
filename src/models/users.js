/**
 * Created by nalantianyi on 2016/12/22.
 */
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
        *query(){
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
        querySuccess(){
        },
        createSuccess(){
        },
        deleteSuccess(){
        },
        updateSuccess(){
        }
    }
}