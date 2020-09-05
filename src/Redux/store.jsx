import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import rootReducers from './rootReducers'

const store = createStore(rootReducers, 
    composeWithDevTools(applyMiddleware(logger ,thunk)))

export default store
