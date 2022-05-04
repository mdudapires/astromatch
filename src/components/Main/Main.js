import React, { useState } from "react";
import AppBar from "../AppBar/AppBar";
import { MainContainer, ScreenContainer } from "./styled";
import HomePage from "../../pages/HomePage/HomePage";
import MatchesPage from "../../pages/MatchesPage/MatchesPage";


const Main = () => {
    const [selectedPage, setSelectedPage] = useState('chooseProfile')

    const renderSelectedPage = () => {
        switch (selectedPage) {
            case 'chooseProfile':
                return <HomePage />
            case 'matchList':
                return <MatchesPage />
            default:
                return <HomePage />
        }

    }
    const goToChooseProfile = () => {
        setSelectedPage('chooseProfile')
    }

    const goToMatchList = () => {
        setSelectedPage('matchList')
    }

    return (
        <div>
            <ScreenContainer>
                <MainContainer>
                    <AppBar selectedPage={selectedPage} goToMatchList={goToMatchList} goToChooseProfile={goToChooseProfile} />
                    {renderSelectedPage()}
                </MainContainer>
            </ScreenContainer>
        </div>
    )
}

export default Main;