// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";


// //calls root reducer
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './../DietRedux/rootReducer';
const store = configureStore(
    {
        reducer:rootReducer
    }
);
export default store;