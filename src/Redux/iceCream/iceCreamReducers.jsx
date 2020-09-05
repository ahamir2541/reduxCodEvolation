import { BUY_ICECREAM } from './iceCreamTypes'

const initialState = {
    iceCream : 20
}

const iceCreamReducer = (state=initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM :
            return {
                ...state,
                iceCream : state.iceCream + 1
            }
        default :
            return state
    }
}

export default iceCreamReducer

