import createStore from "redux";
import {counterReducer, incrementCounter } from "./CounterState";

export const store = createStore(counterReducer)

store.dispatch(incrementCounter(3))
store.dispatch(incrementCounter(2))


store.subscribe(()=>{

    console.log(store.getState())
})

