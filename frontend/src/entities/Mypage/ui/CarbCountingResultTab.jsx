import styled from "styled-components"
import CarbCountingResultCell from "./CarbCountingResultCell";

function CarbCountingResultTab(){
    return(
    <CellWrap>
        
        <CarbCountingResultCell />
        <CarbCountingResultCell />
        <CarbCountingResultCell />
        
    </CellWrap>
    )
}

export default CarbCountingResultTab

const CellWrap = styled.div`
display: flex;
flex-direction: column;
gap: 1.6rem
`