import { createRoutine } from "redux-saga-routines";

export const listProfilesRoutine = createRoutine("PROFILES/LIST");
export const getProfileRoutine = createRoutine("PROFILES/GET");
export const createProfileRoutine = createRoutine("PROFILES/CREATE");
export const updateProfileRoutine = createRoutine("PROFILES/UPDATE");
export const deleteProfileRoutine = createRoutine("PROFILES/DELETE");
