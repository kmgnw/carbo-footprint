import styled from "styled-components"
import pretzel from '../../../assets/Pretzel.svg'
import MenuCell from "./MenuCell"
import { recommendedResultState } from "../../../shared/state/DietRecommendResult";
import { useRecoilValue } from "recoil";
import { newAllergyTypeState, newEatingHabitTypeState } from "../../../shared/state/DietRecommend";

function ResultMenu(){

    const recommendedResult = useRecoilValue(recommendedResultState)
    const newAllergyType = useRecoilValue(newAllergyTypeState)
    const newEatingHabitType = useRecoilValue(newEatingHabitTypeState)
    
    return(
        <MainLayout>

            <TitleWrap>
                <Logo src={pretzel} alt="pretzel" fetchPriority="high"/>
                <Title>이런 메뉴는 어떤가요?</Title>
            </TitleWrap>
            
            {recommendedResult.map((e)=>(
                <MenuCell
                title={e.name}
                img={e.image_url}
                categories={[newAllergyType, newEatingHabitType]}
                calories={e.calorie}
                carb={e.carbohydrate}
                sugar={e.saccharide}
                />
            ))}

            
        </MainLayout>
    )
}

export default ResultMenu

const MainLayout = styled.div`
background-color: #F2F3F5;
height: 57rem;
padding: 2.4rem 2rem;
overflow-y: auto;
`

const TitleWrap = styled.div`
display: flex;
gap: 0.8rem;
align-items: center;
margin-bottom: 0.8rem;
`

const Title = styled.div`
color: #262829;
font-family: "Noto Sans KR";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const Logo = styled.img`

`