import styled from "styled-components"
import DietRecommendResultCell from "./DietRecommendResultCell";

function DietRecommendResultTab(){
    return(
    <CellWrap>
        
        <DietRecommendResultCell />
        <DietRecommendResultCell />
        <DietRecommendResultCell />
        
    </CellWrap>
    )
}

export default DietRecommendResultTab

const CellWrap = styled.div`
display: flex;
flex-direction: column;
gap: 1.6rem
`