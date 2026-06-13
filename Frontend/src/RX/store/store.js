import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from './../reducers/reducer';



export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
    )
);
