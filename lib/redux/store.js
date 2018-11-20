import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../../reducers';

const initialState = {};

// const middleware = [thunk];

export const initStore = (initialState = initialState) => {
    return createStore(
        rootReducer, 
        initialState,
        composeWithDevTools (
            applyMiddleware(thunkMiddleware),
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ) 
    )
}