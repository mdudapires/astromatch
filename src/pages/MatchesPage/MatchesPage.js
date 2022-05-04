import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import MatchListItem from "../../components/MatchList/MatchListItem";
import { MatchListDiv } from "../../components/MatchList/styled";
import { BASE_URL } from "../../constants/urls";
import { CenterLoading } from "../HomePage/styled";


const MatchesPage = () => {
    const [matches, setMatches] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getMatches = () => {
        axios.get(`${BASE_URL}matches`)
            .then((res) => {
                setMatches(res.data.matches)
                setIsLoading(false)
            })
            .catch((err) => {
                alert(err.message)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        getMatches()
    }, [])
       
    return (
        <MatchListDiv>
            {isLoading ? <CenterLoading><CircularProgress/></CenterLoading> : 
                matches.map((match) => {
                return <MatchListItem key={match.name} match={match}/>
            })}
        </MatchListDiv>
    )
}

export default MatchesPage;