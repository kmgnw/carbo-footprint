import styled from "styled-components";
import Header from "../entities/DietRecommendResult/ui/Header";
import ResultMenu from "../entities/DietRecommendResult/ui/ResultMenu";
import SelectedKeyword from "../entities/DietRecommendResult/ui/SelectedKeyword";
import ShareResult from "../entities/DietRecommendResult/ui/ShareResult";
import Footer from "../shared/components/Footer/Footer";

function DietRecommendResult(){
    return(
        <>
        <Header />
        <ResultMenu />
        <SelectedKeyword />
        <ShareResult />
        <Footer />
        </>
    )
}

export default DietRecommendResult;