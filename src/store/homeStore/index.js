import {createStore,applyMiddleware} from "redux"
import {combineReducers} from "redux-immutable"
import reducer1 from "./navReducer/reducer"
import reducer2 from "./ConReducer"
import promiseMiddleware from "redux-promise-middleware";
import reducer3 from "./optionReducer"
import reducer4 from "./food"

const rootReducer = combineReducers({
    reducer1,
    reducer2,
    reducer3,
    reducer4
})
let store = createStore(rootReducer,applyMiddleware(promiseMiddleware))

export default store;