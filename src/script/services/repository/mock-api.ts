import { Api } from "./api";
import { Profile } from "../../model/profiles";

const DELAY = 1000;

export const MockApi: Api = {

    profiles: {
        listProfiles: async function() {
            const mockData: Profile[] = [{
                name: "Adam West"
            }, {
                name: "Harrison Ford"
            }];

            return new Promise((resolve) =>
                setTimeout( () => {
                    resolve(mockData);
                }, DELAY)
            )
        }
    }

};
