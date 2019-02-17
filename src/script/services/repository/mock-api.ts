import { Api } from "./api";

const DELAY = 1000;

export const MockApi: Api = {

    profiles: {
        getProfiles: async function() {
            const mockData = [{
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
