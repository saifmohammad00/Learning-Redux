const redux=require("redux");
const counterReducer=(state={counter:0},action)=>{
    let result=action.type==='decrement'?-1:1;
    return {
        counter:state.counter+result,
    };
}
const store=redux.createStore(counterReducer);

const counterSubscriber=()=>{
    const latestState=store.getState();
    console.log(latestState);
}
store.subscribe(counterSubscriber);
store.dispatch({type:'increment'});
store.dispatch({type:'increment'});
store.dispatch({type:'increment'});
store.dispatch({type:'increment'});
store.dispatch({type:'increment'});
store.dispatch({type:'decrement'});