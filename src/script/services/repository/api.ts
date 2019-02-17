import { Profile } from "../../model/profiles";

export interface ProfilesEndpoints {
    getProfiles: () => Promise<Profile[]>;
}

export interface Api {
    profiles: ProfilesEndpoints;
}

