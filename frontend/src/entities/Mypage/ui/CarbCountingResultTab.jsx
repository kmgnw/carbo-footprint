import styled from "styled-components"
import CarbCountingResultCell from "./CarbCountingResultCell";
import NoData from './NoData'

function CarbCountingResultTab() {
    return (
        <CellWrap>
            
            {true ? (
                <>
                    <CarbCountingResultCell />
                    <CarbCountingResultCell />
                    <CarbCountingResultCell />
                </>
            ) : <NoData />}

        </CellWrap>
    )
}

export default CarbCountingResultTab

const CellWrap = styled.div`
display: flex;
flex-direction: column;
gap: 1.6rem
`