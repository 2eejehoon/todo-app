import { applyMiddleware, legacy_createStore as createSotre } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const store = createSotre(rootReducer, applyMiddleware(thunk));

export default store;
