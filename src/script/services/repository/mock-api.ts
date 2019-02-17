import { Api } from "./api";
import { Profile } from "../../model/profiles";

const DELAY = 1000;

export const MockApi: Api = {

    profiles: {
        async listProfiles() {
            const mockData: Profile[] = [{
                id: "5dga4no",
                name: "Adam West"
            }, {
                id: "sk1ek4x",
                name: "Harrison Ford"
            }, {
                id: "8vj5vb3",
                name: "Joe Jackson"
            }, {
                id: "h06u03g",
                name: "Tim Burton"
            }];

            return new Promise((resolve) =>
                setTimeout( () => {
                    resolve(mockData);
                }, DELAY)
            )
        }
    }

};
