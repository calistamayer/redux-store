import { createStore } from 'redux';
import reducer from '../utils/reducers';

export default function configureStore(initialState) {
    const store = createStore(
        reducer,
        initialState,
        window.devToolsExtension ? window.devToolsExtension() : undefined
    );

    return store;
}