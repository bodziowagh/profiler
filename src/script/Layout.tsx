import React from "react";
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
