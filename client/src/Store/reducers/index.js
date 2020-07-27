import errorReducer from './errorReducer'
import userReducer from './userReducer'
import themeReducer from './themeReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    userReducer,
    errorReducer,
    themeReducer
})

export default rootReducer