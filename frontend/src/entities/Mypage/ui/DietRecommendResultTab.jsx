import styled from "styled-components"
import DietRecommendResultCell from "./DietRecommendResultCell";
import NoData from "./NoData";
import { fetchDietRecommends } from "../api/api";
import { useEffect, useState } from "react";

function DietRecommendResultTab() {

    const [diets, setDiets] = useState([])

    useEffect(()=>{
        fetchDietRecommends(setDiets)
    }, [])

    return (
        <CellWrap>
            {true ? (
                diets.map((e)=>(
                    <DietRecommendResultCell 
                    date={e.date}
                    allergen_list={e.allergen_list}
                    preference_list={e.preference_list}
                    recommend_food_list={e.recommend_food_list}
                    />
                ))
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