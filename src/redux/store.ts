import { combineReducers, createStore } from "redux";
import { ProfilesStateShape, reducer as profiles } from "./example/reducer";
import { intlReducer } from "react-intl-redux";
import { getInitialLocale } from "../locale/index";

export type StateShape = {
    profiles: ProfilesStateShape
};

const initialState = {
    intl: getInitialLocale()
};

const reducers = combineReducers({
    profiles,
    intl: intlReducer
});

export const store = createStore(reducers, initialState);
