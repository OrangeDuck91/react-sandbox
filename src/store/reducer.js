import { combineReducers } from 'redux'
import articleReducer from './articles-reducer'


const rootReducer = combineReducers({
    // Define a top-level state field named `articles`, handled by `articlesReducer`
    articles: articleReducer,
})

export default rootReducer