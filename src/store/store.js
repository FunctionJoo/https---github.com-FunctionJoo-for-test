import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        todoItems: []
    },

    getters: {
        getTodo: state => {
            console.log(getter);
            return state.todoItems;
        }
    },

    mutations: {
        // 초기 데이터 세팅용
        setTodo(state) {
            if (localStorage.length > 0) {
                for (var i = 0; i < localStorage.length; i++) {
                    if ( localStorage.key(i) != 'loglevel:webpack-dev-server' ) {
                        state.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    }
                }
            }
        },
        clearAll(state) {
            localStorage.clear();
            state.todoItems = [];
            console.log('clearall');
        },
        addTodo(state, todoItem) {
            let iptdata = {txt: todoItem, chk: true};
            let makeChk = JSON.stringify(iptdata);
            localStorage.setItem(todoItem, makeChk);
            state.todoItems.push(iptdata);
        },
        removeTodo(state, todoItem) {
            localStorage.removeItem(todoItem[0]);
            state.todoItems.splice(todoItem[1], 1);
        },
        chktoggle(state, todoItem) {
            console.log(todoItem);
            let item = state.todoItems[todoItem[1]];
            item.chk = !item.chk;
            let stgval = {txt: item.txt, chk: item.chk}
            localStorage.setItem(item.txt, JSON.stringify(stgval));
        }
    }
})

export default store