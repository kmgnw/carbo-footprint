import styled from "styled-components"
import CarbTestResultCell from "./CarbTestResultCell"

function CarbTestResultTab() {
    return (
        <CellWrap>
            <CarbTestResultCell type='양호'/>
            <CarbTestResultCell type='주의'/>
            <CarbTestResultCell type='위험'/>
            <CarbTestResultCell type='중독'/>
        </CellWrap>
    )
}

export default CarbTestResultTab

const CellWrap = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
margin-bottom: 1.6rem;

@media (max-width: 428px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 328px) {
    grid-template-columns: repeat(1, 1fr);
}

@media (max-width: 228px) {
    grid-template-columns: 1fr;
}
gap: 1.6rem
`