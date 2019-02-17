import * as React from "react";
import { Profile } from "../../model/profiles";
import { Link } from "react-router-dom";

interface LineItemProps {
    item: Profile;
}

export const LineItem: React.FunctionComponent<LineItemProps> = ({
    item
}) => {
    return (
        <div className="profile-list-item">
            { item.name }
            <Link to={ `/${ item.id }` }>
                Details
            </Link>
        </div>
    );
};
