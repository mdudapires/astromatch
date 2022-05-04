import { Button } from '@material-ui/core';
import { PeopleAlt } from '@material-ui/icons';
import React from 'react';
import { AppBarContainer, H2} from './styled';

const AppBar = (props) => {
    const changePage = () => {
        if(props.selectedPage === 'chooseProfile'){
            return <Button onClick={props.goToMatchList}><PeopleAlt fontSize='large' /></Button>
        } else if(props.selectedPage === 'matchList'){
            return <Button onClick={props.goToChooseProfile}><PeopleAlt fontsize='large'/></Button>
        }
    }
        return (
        <AppBarContainer>
            <H2>AstroMatch</H2>
                {changePage()}
        </AppBarContainer>
    )
}

export default AppBar;