import { combineReducers } from 'redux'
import cakeReducer from './Cake/CakeReducers'
import iceCreamReducer from './iceCream/iceCreamReducers'
import userReducer from './User/userReducers'

const rootReducers = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer,
    user : userReducer
})

export default rootReducers
