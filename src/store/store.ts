import { applyMiddleware, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { authReducer } from './reducers'

const store = createStore(authReducer, applyMiddleware(thunk))

export default store
