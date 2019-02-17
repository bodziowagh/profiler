import React from "react";
import { Route, Switch } from "react-router";
import { List } from "./sections/profiles/List";
import { Routes } from "./sections/profiles/routes/router";

export class Layout extends React.Component {

    render() {
        return (
            <div className="layout">
                <div className="header">
                    Header
                </div>
                <div className="content">
                    <Routes />
                </div>
            </div>
        );
    }
}
