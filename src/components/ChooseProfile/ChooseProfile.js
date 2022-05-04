import React from "react";
import ChooseButtons from "./ChooseButtons";
import ProfileCard from "./ProfileCard";


const ChooseProfile = (props) => {
    return(
        <div>
            <ProfileCard profile={props.profile}/>
            <ChooseButtons choosePerson={props.choosePerson} notChoosePerson={props.notChoosePerson}/>
        </div>
    )
}

export default ChooseProfile;