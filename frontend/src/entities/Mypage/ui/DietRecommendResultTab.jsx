import styled from "styled-components"
import DietRecommendResultCell from "./DietRecommendResultCell";
import NoData from "./NoData";

function DietRecommendResultTab() {
    return (
        <CellWrap>
            {true ? (
                <>
                    <DietRecommendResultCell />
                    <DietRecommendResultCell />
                    <DietRecommendResultCell />
                </>
            ) : <NoData />}
        </CellWrap>
    )
}

export default DietRecommendResultTab

const CellWrap = styled.div`
display: flex;
flex-direction: column;
gap: 1.6rem
`