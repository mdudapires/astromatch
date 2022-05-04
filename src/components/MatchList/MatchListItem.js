import React from "react";
import { ListItemDiv, ListItemPhoto } from "./styled";

const MatchListItem = (props) => {
    return(
        <ListItemDiv>
            <ListItemPhoto src={props.match.photo} width="45px" height="40px"/>
            <p>{props.match.name}</p>
        </ListItemDiv>
    )
}

export default MatchListItem;