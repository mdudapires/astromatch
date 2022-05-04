import React from "react";
import { CardMedia, H3, P } from "./styled";


const ProfileCard = (props) => {
    return(
        <div>
            <CardMedia src={props.profile.photo}/>
            <H3>{props.profile.name}, {props.profile.age}</H3>
            <P>{props.profile.bio}</P>
        </div>
    )
}

export default ProfileCard;