const defaultState = [];

const ADD = 'TODO@ADD'
const REMOVE = 'TODO@REMOVE'
const CHANGE = 'TODO@CHANGE'
const RESET = 'TODO@RESET'


export function addTodo(todo){
    return {
        Type: ADD,
        payload: id 
    }
}

export function removeTodo(id){
    return{
        type: REMOVE,
        payload : id
    }
}

export function changeTodo(id, date){
    return{
        type: CHANGE,
        payload: {id,date}
    }
}

export function resetTodo(){
    return {type: RESET}

}


export function todoReducer(state = defaultState, action){
    switch ( action.type){
        case ADD : {
            return [...state , action.payload]
        }


        case REMOVE : {
            return state.filter((item)=> item.id !==action.payload)
        }


        case CHANGE : {
            return state.map((item)=> {
                if(item.id === action.payload.id) {
                    return {...item, ...action.payload.date}
                }
                return item
            })
        }

        case RESET: {
            return defaultState
        }

        default: {
            return state
        }
    }
}