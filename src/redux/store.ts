import { applyMiddleware, combineReducers, createStore } from "redux";
import { intlReducer } from "react-intl-redux";
import { getInitialLocale } from "../locale/index";
import { sagas } from "./sagas";
import { ProfilesStateShape } from "./profiles/reducer";
import { reducer as profiles } from "./profiles/reducer";
import createSagaMiddleware from "redux-saga";

export type StateShape = {
    profiles: ProfilesStateShape
};

const initialState = {
    intl: getInitialLocale()
};

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    profiles,
    intl: intlReducer
});

export const store = createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleware)
);

sagas.forEach((saga) => sagaMiddleware.run(saga));
