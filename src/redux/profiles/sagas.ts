import { all, takeLatest, put } from "@redux-saga/core/effects";
import {
    createProfileRoutine, deleteProfileRoutine, getProfileRoutine, listProfilesRoutine,
    updateProfileRoutine
} from "./actions";
import { Api } from "../../script/services/repository";

// List Profiles
function *listProfilesWatcher() {
    yield takeLatest(listProfilesRoutine.TRIGGER, listProfiles);
}

function *listProfiles() {
    yield put(listProfilesRoutine.request());

    const response = yield Api.profiles.listProfiles();

    yield put(listProfilesRoutine.success(response));
}

// Get Profile
function *getProfileWatcher() {
    yield takeLatest(getProfileRoutine.TRIGGER, getProfile);
}

function *getProfile() {
    console.log("TODO: getProfile - Implement me!");
    yield false;
}

// Create Profile
function *createProfileWatcher() {
    yield takeLatest(createProfileRoutine.TRIGGER, createProfile);
}

function *createProfile() {
    console.log("TODO: createProfile - Implement me!");
    yield false;
}

// Update Profile
function *updateProfileWatcher() {
    yield takeLatest(updateProfileRoutine.TRIGGER, updateProfile);
}

function *updateProfile() {
    console.log("TODO: updateProfile - Implement me!");
    yield false;
}

// Delete Profile
function *deleteProfileWatcher() {
    yield takeLatest(deleteProfileRoutine.TRIGGER, deleteProfile);
}

function *deleteProfile() {
    console.log("TODO: deleteProfile - Implement me!");
    yield false;
}

export default function *rootSaga() {
    yield all([
        listProfilesWatcher(),
        getProfileWatcher(),
        createProfileWatcher(),
        updateProfileWatcher(),
        deleteProfileWatcher()
    ]);
}
