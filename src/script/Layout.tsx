import React from "react";
import { Route, Switch } from "react-router";
import { List } from "./sections/profiles/List";

export class Layout extends React.Component {

    render() {
        return (
            <Switch>
                <Route path="/" component={ List } />
            </Switch>
        );
    }
}
