import React from "react";
import { useEffect } from "react";
import { Loader } from "./components/Loader";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { listProfilesRoutine } from "../../../redux/profiles/actions";
import { compose } from "recompose";

export interface CustomProps {}

interface DispatchProps {
    actions: {
        listProfiles: any;  // TODO: type
    };
}

type InjectedProps = DispatchProps;

type ProfilesListProps = CustomProps & InjectedProps;

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        actions: bindActionCreators({
            listProfiles: listProfilesRoutine.trigger
        }, dispatch)
    };
}

export const List = compose<ProfilesListProps, CustomProps>(
    connect(
        null,
        mapDispatchToProps
    ))(({
       actions: { listProfiles }
    }) => {

        useEffect(() => {
            listProfiles();
        }, []);

        return (
            <div>
                List

                <button>toggle</button>

                <div>
                    <Loader loading={ true } >
                        <div>Loaded!</div>
                    </Loader>
                </div>
            </div>
        );
    }
);
