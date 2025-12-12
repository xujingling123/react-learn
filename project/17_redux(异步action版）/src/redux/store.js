//引入createStore
import {createStore,applyMiddleware} from 'redux'
//引入reducer
import countReducer from './count_reducer'
//引入redux-thunk,用于支持异步action
import {thunk} from 'redux-thunk'

export default createStore(countReducer,applyMiddleware(thunk))

