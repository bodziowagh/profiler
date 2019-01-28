import React from "react";
import { Route, Switch } from "react-router";

export class Layout extends React.Component {

    render() {
        return (
            <Switch>
                <Route path="/" component={ null } />
            </Switch>
        );
    }
}