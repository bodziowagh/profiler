import { Profile } from "../../script/model/profiles";
import { listProfilesRoutine } from "./actions";

export interface ProfilesStateShape {
    items: Profile[];
    loading: boolean;
}

const initialState = {
    items: [],
    loading: false
};

export function reducer(state: ProfilesStateShape = initialState, action: any): ProfilesStateShape {    // TODO: action type

    switch (action.type) {

        case listProfilesRoutine.REQUEST:
            return {
                ...state,
                loading: true
            };

        case listProfilesRoutine.SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };

        default:
            return state;
    }

    return state;
}
