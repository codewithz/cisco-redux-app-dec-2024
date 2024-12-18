import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import { thunk } from "redux-thunk";


// We are creating our store here
export const store=createStore(
    reducers, //here we specify all our reducers 
    {}, // This object represents initialState 
    applyMiddleware(thunk) //applyMiddleware helps to apply
                            // middleware which helps in taking care of async functions
);

