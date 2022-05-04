import React from "react";
import MatchListItem from "./MatchListItem";
import { MatchListDiv } from "./styled";

const MatchList = (props) => {
    return(
        <MatchListDiv>
            {props.matches.map((match) => {
                return <MatchListItem key={match.id} match={match}/>
            })}
        </MatchListDiv>
    )
}

export default MatchList;