import createStore from "redux";
import {todoReducer} from "./TodoState";
import {combineReducers} from 'redux'
import { counterReducer } from "./CounterState";

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer
})
export const store = createStore


