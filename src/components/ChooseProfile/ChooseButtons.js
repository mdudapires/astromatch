import { Button } from "@material-ui/core";
import { Close, FavoriteBorder } from "@material-ui/icons";
import React from "react";
import { ChooseButtonsDiv } from "./styled";

const ChooseButtons = (props) => {
    return(
        <ChooseButtonsDiv>
            <Button onClick={props.notChoosePerson}><Close fontSize="large"/></Button>
            <Button onClick={props.choosePerson}><FavoriteBorder fontSize="large"/></Button>
        </ChooseButtonsDiv>

    )
}

export default ChooseButtons;