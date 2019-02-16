import React from "react";
import { Loader } from "./components/Loader";

export interface ProfilesListProps {}

export class List extends React.Component<ProfilesListProps, { loading: boolean }> {

    state = {
        loading: true
    };

    toggleLoading = () => {
        this.setState({ loading: !this.state.loading });
    }

    render() {
        const { loading } = this.state;

        return (
            <div>
                List

                <button onClick={ this.toggleLoading }>toggle</button>

                <div>
                    <Loader loading={ loading } >
                        <div>Loaded!</div>
                    </Loader>
                </div>
            </div>
        );
    }
}
