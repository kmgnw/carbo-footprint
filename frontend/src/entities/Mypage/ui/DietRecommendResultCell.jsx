import styled from "styled-components"
import Choices_nonclickable from "../../../shared/components/choices_nonclickable/Choices_nonclickable";
import StandardButton from "../../../shared/components/StandardButton/StandardButton";
import { recommendedResultState } from "../../../shared/state/DietRecommendResult";
import { newAllergyTypeState, newEatingHabitTypeState } from "../../../shared/state/DietRecommend";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

function DietRecommendResultCell({date, allergen_list, preference_list, recommend_food_list, }){
    
    const [_, setRecommendedResult] = useRecoilState(recommendedResultState)
    const [__, setNewAllergyType] = useRecoilState(newAllergyTypeState)
    const [___, setNewEatingHabitType] = useRecoilState(newEatingHabitTypeState)
    const navigate = useNavigate()

    function handleButtonClick(){
        setRecommendedResult(recommend_food_list)
        setNewAllergyType(allergen_list)
        setNewEatingHabitType(preference_list)
        navigate('/diet-recommend-result')
    }

    return(
        <MainLayout>

            <DateWrap>
                <DateContainer>
                {date}
                </DateContainer>
                
            </DateWrap>

            <Choices_nonclickable
            allergies={allergen_list}
            eatingHabits={preference_list}
            />

            <StandardButton title='결과보기' onClick={handleButtonClick}/>
        </MainLayout>
    )
}

export default DietRecommendResultCell

const MainLayout = styled.div`
display: flex;
flex-direction: column;
gap: 1.6rem;
padding: 1.6rem;
border-radius: 1.6rem;
background: #F2F3F5;
box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.20);
`

const DateWrap = styled.div``

const DateContainer = styled.div`
display: inline-block;
background-color :#BABEC0;
color: #FFF;
font-family: "Noto Sans KR";
font-size: 1rem;
font-style: normal;
font-weight: 500;
text-align: center;
line-height: normal;
border-radius: 2rem;
padding: 0.4rem 0.8rem;
`