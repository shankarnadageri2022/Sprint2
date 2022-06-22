import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/RootReducers";
import thunk from 'redux-thunk'

export default function ConfigureStore() {

    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
}