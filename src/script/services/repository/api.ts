import { Profile } from "../../model/profiles";

export interface ProfilesEndpoints {
    listProfiles: () => Promise<Profile[]>;
}

export interface Api {
    profiles: ProfilesEndpoints;
}
