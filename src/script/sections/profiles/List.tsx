import React from "react";
import { useEffect } from "react";
import { Loader } from "./components/Loader";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { listProfilesRoutine } from "../../../redux/profiles/actions";
import { compose } from "recompose";
import { StateShape } from "../../../redux/store";
import { ProfilesStateShape } from "../../../redux/profiles/reducer";

export interface CustomProps {}

interface DispatchProps {
    actions: {
        listProfiles: any;  // TODO: type
    };
}

interface StateProps {
    profiles: ProfilesStateShape;
}

type InjectedProps = StateProps & DispatchProps;

type ProfilesListProps = CustomProps & InjectedProps;

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        actions: bindActionCreators({
            listProfiles: listProfilesRoutine.trigger
        }, dispatch)
    };
}

function mapStateToProps(state: StateShape, props: CustomProps): StateProps {
    return {
        profiles: state.profiles
    };
}

export const List = compose<ProfilesListProps, CustomProps>(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ))(({
        actions: { listProfiles },
        profiles: { loading, items = [] }
    }) => {

        useEffect(() => {
            listProfiles();
        }, []);

        return (
            <div>
                List

                <button>toggle</button>

                <div>
                    <Loader loading={ loading } >
                        <div>
                            {
                                items.map((item) => (
                                    <div>
                                        { item.name }
                                    </div>
                                ))
                            }
                        </div>
                    </Loader>
                </div>
            </div>
        );
    }
);
