import axios from "axios";
import { useEffect, useState } from "react";
import ProfileCard from "../../components/ChooseProfile/ProfileCard";
import { BASE_URL } from "../../constants/urls";
import ChooseButtons from "../../components/ChooseProfile/ChooseButtons";
import { CircularProgress } from "@material-ui/core";
import { CenterLoading } from "./styled";

const HomePage = () => {
    const [profile, setProfile] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    const getProfileToChoose = () => {
        axios.get(`${BASE_URL}person`)
            .then((res) => {
                setProfile(res.data.profile)
                setIsLoading(false)
            })
            .catch((error) => {
                alert(error)
                setIsLoading(false)
            })
    }

    const choosePerson = () => {
        const body = {
            id: profile.id,
            choice: true
        }
        axios.post(`${BASE_URL}choose-person`, body)
            .then((res) => {
                getProfileToChoose()
            })
            .catch((err) => {
                alert("Ocorreu um erro. Tente novamente mais tarde.")
            })
    }

    const notChoosePerson = () => {
        const body = {
            id: profile.id,
            choice: false
        }
        axios.post(`${BASE_URL}choose-person`, body)
            .then((res) => {
                getProfileToChoose()
            })
            .catch((err) => {
                alert("Ocorreu um erro. Tente novamente mais tarde.")
            })
    }

    useEffect(() => {
        getProfileToChoose()
    }, [])

    return (
        <div>{
            isLoading ? <CenterLoading><CircularProgress/></CenterLoading> : <><ProfileCard profile={profile}/>
            <ChooseButtons choosePerson={choosePerson} notChoosePerson={notChoosePerson}/></>}
        </div>
    )
}

export default HomePage;