import styled from "styled-components"
import CarbCountingResultCell from "./CarbCountingResultCell";
import NoData from './NoData'
import { useEffect, useState } from "react";
import { fetchClassification } from "../api/api";

function CarbCountingResultTab() {

    const [classification, setClassification] = useState([])

    useEffect(()=>{
        fetchClassification(setClassification)
    }, [])

    return (
        <CellWrap>
            
            {true ? (
                classification.map((e,i)=>(
                    <CarbCountingResultCell 
                    key={i}
                    date={e.date}
                    name={e.name}
                    calorie={e.calorie}
                    prot={e.prot}
                    fat={e.fat}
                    sugar={e.sugar}
                    image_url={e.image_url}
                    />
                ))
                
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