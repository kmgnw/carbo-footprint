import styled from "styled-components"
import CarbTestResultCell from "./CarbTestResultCell"
import NoData from './NoData'
import { useEffect, useState } from "react"
import { fetchAddictions } from "../api/api"

function CarbTestResultTab() {

    const [addictions, setAddictions] = useState([])

    useEffect(()=>{
        fetchAddictions(setAddictions)
    }, [])

    function typeValidator(checkCount){
        if(checkCount === 0){
            return '양호'
        }else if (0<checkCount && checkCount<4){
            return '주의'
        }else if (3<checkCount && checkCount<7){
            return '위험'
        }else if (6<checkCount && checkCount<11){
            return '중독'
        }
    }
  
    return (

        <>
            {true ? (
                <CellWrap>
                    {addictions.map((e,i)=>(
                        <CarbTestResultCell
                        key={i}
                        type= {typeValidator(e.check_count)}
                        date={e.date}
                        check_count={e.check_count}
                        />
                    ))}
                </CellWrap>
            ) : <NoData />}
        </>

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