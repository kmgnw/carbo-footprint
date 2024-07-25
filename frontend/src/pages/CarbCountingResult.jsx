import styled from "styled-components";
import Header from "../entities/CarbCounting/ui/Header";
import Banner from "../entities/CarbCounting/ui/Banner";
import MainContent from "../entities/CarbCountingResult.jsx/ui/MainContent";
import Footer from "../shared/components/Footer/Footer";

function CarbCountingResult(){
    return(
    <>
        <Header/>
        <Banner/>
        <MainContent/>
        <Footer/>
    </>
    );
}

export default CarbCountingResult;