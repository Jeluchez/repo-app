import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducers } from '../reducers/authReducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose;
const reducers = combineReducers({
    auth: authReducers,
    // images: imagesReducers,
})
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
   
);

