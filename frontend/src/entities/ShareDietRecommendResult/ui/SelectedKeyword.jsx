import styled from "styled-components"
import Choices_nonclickable from "../../../shared/components/choices_nonclickable/Choices_nonclickable"
import { useRecoilValue } from "recoil"
import { shareRecommendedResultState } from "../../../shared/state/DietRecommendResult"


function SelectedKeyword(){
    const recommendResult = useRecoilValue(shareRecommendedResultState)

    return(
        <MainLayout>
            <Title>선택한 키워드</Title>
            
                <Choices_nonclickable
                allergies={recommendResult.allergen_list}
                eatingHabits={recommendResult.preference_list}
                />
            
        </MainLayout>
    )
}

export default SelectedKeyword

const MainLayout = styled.div`
padding: 2rem;
background-color: white;
`

const Title = styled.div`
color: #262829;
font-family: "Noto Sans KR";
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 1.6rem
`