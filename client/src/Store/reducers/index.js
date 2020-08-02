import errorReducer from './errorReducer'
import userReducer from './userReducer'
import themeReducer from './themeReducer'
import sidebarReducer from './sidebarReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    userReducer,
    errorReducer,
    themeReducer,
    sidebarReducer
})

export default rootReducer