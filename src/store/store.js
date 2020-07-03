import { createStore, combineReducers } from 'redux';

import testReducer from '../redux/reducers/reducers'

const rootReducer = combineReducers({
    testReducer: testReducer
})

const store = () => {
    return createStore(rootReducer);
}

export default store;