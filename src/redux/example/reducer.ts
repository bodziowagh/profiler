import { Action } from "../actions";
import { ExamplePayload, SET_EXAMPLE_ACTION } from "./actions";
import { LOCALE_LABELS } from "../../locale/labels/index";

export interface ProfilesStateShape {}

const initialState = {};

export function reducer(state: ProfilesStateShape = initialState, action: Action<ExamplePayload>): ProfilesStateShape {

    switch (action.type) {

    }

    return state;
}
