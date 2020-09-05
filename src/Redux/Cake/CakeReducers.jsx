import { BUY_CAKE } from './CakeTypes'

const initialState = {
    numOfCake : 100
}

const reducer = (state =initialState ,action) => {
    switch(action.type){
        case BUY_CAKE :
            return {
                ...state,
                numOfCake : state.numOfCake + Number(action.payload)
            }
        default :
            return state
    }
}

export default reducer