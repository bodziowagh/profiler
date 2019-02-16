import * as React from "react";
import { Fragment } from "react";

export interface LoaderProps {
    loading: boolean;
}

const LoaderComponent = () => {
    return (
        <div className="loader">
            <div className="container">
                <div className="square" />
                <div className="square" />
                <div className="square" />
                <div className="square" />
                <div className="square" />
                <div className="square" />
                <div className="square" />
                <div className="square" />
                <div className="square" />
            </div>
        </div>
    );
};

export const Loader: React.StatelessComponent<LoaderProps> = ({
    children,
    loading
}) => {
    return (
        <>
            { loading ? <LoaderComponent /> : children }
        </>
    );
};
