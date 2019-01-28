import * as PROFILES_LABELS from "./profiles";

export type ProfilesLabels = typeof PROFILES_LABELS;

export type LocaleLabels = ProfilesLabels;

export const LOCALE_LABELS = {
    ...PROFILES_LABELS
};
