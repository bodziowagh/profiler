import React from "react";
import { Route, Switch } from "react-router";
import { List } from "../List";
import { Details } from "../Details";

export const Routes = () => {
    return (
        <>
            <Route path="/:profileId" component={ Details } />
            <Route path="/" exact component={ List } />
        </>
    );
};
