import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            count:100
        }
    },
    mutations:{
        changevalue(state,payload){
            state.count=state.count+payload
        },
        minvalue(state,payload){
            state.count=state.count-payload
        },
        squareval(state){
            state.count=state.count*state.count
        }
    }
})
export default store;