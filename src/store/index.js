import { createStore } from 'redux';
import rootReducers from 'store/rootReducers';

const store = createStore(rootReducers);

export default store;
