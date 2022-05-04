import { Button } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";


const ResetButton = () => {
    const clear = () => {
        axios.put(`${BASE_URL}clear`)
            .then((res) => {
            })
            .catch((err) => {
                alert("Ocorreu um erro. Tente novamente mais tarde.")
            })
    }
    return(
        <div>
            <Button onClick={clear}><Delete fontSize="large"/></Button>
        </div>
    )
}

export default ResetButton;