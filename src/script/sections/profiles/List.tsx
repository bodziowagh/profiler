import React from "react";
import { Loader } from "./components/Loader";

export interface ProfilesListProps {}

export class List extends React.Component<ProfilesListProps, {}> {

    render() {
        return (
            <div>
                List
                <Loader loading={ true } />
            </div>
        );
    }
}
