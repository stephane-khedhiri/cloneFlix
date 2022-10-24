import { configureStore, applyMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import filmThunk from "./film/film.thunk";

const stores = configureStore(rootReducer,
    applyMiddleware(thunk)
);

stores.dispatch(filmThunk())
export default stores

