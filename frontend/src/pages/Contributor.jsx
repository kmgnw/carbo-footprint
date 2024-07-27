import styled from "styled-components"
import Header from "../entities/Contributor/ui/Header"
import TitleSection from "../entities/Contributor/ui/TitleSection"
import ContributorSection from "../entities/Contributor/ui/ContributorSection"
import Footer from "../shared/components/Footer/Footer"

function Contributor (){
    return(
        <>
        <Header />
        <TitleSection />
        <ContributorSection />
        <Footer />
        </>
    )
}

export default Contributor