//引入createStore
import {createStore} from 'redux'
//引入reducer
import countReducer from './count_reducer'

export default createStore(countReducer)

