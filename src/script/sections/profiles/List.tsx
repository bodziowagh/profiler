import React, { useEffect } from "react";
import { Loader } from "./components/Loader";
import { connect } from "react-redux";
import { listProfilesRoutine } from "../../../redux/profiles/actions";
import { compose } from "recompose";
import { StateShape } from "../../../redux/store";
import { ProfilesStateShape } from "../../../redux/profiles/reducer";
import { LineItem } from "./ListItem";

export interface CustomProps {}

interface DispatchProps {
    listProfiles: typeof listProfilesRoutine;
}

interface StateProps {
    profiles: ProfilesStateShape;
}

type InjectedProps = StateProps & DispatchProps;

type ProfilesListProps = CustomProps & InjectedProps;

const actionCreators: DispatchProps = {
    listProfiles: listProfilesRoutine.trigger
};

function mapStateToProps(state: StateShape): StateProps {
    return {
        profiles: state.profiles
    };
}

export const List = compose<ProfilesListProps, CustomProps>(
    connect(
        mapStateToProps,
        actionCreators
    ))(({
        listProfiles,
        profiles: { loading, items = [] }
    }) => {

        useEffect(() => {
            listProfiles();
        }, []);

        return (
            <div className="profile-list">
                <Loader loading={ loading } >
                    {
                        items.map((item) => <LineItem item={ item } />)
                    }
                </Loader>
            </div>
        );
    }
);
