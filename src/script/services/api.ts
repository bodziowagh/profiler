export interface ProfilesEndpoints {
    getProfiles: () => Promise<any>;
}

export interface Api {
    profiles: ProfilesEndpoints;
}
