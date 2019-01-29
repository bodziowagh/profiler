import * as React from "react";

export interface LoaderProps {
    loading: boolean;
}

export const Loader: React.StatelessComponent<LoaderProps> = ({
    loading
}) => {
    return loading ? (
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
    ) : null;
}
