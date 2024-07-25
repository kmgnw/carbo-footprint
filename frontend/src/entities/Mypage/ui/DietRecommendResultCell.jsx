import styled from "styled-components"
import Choices_nonclickable from "../../../shared/components/choices_nonclickable/Choices_nonclickable";
import StandardButton from "../../../shared/components/StandardButton/StandardButton";

function DietRecommendResultCell(){
    return(
        <MainLayout>

            <DateWrap>
                <DateContainer>
                00.00.0요일
                </DateContainer>
                
            </DateWrap>

            <Choices_nonclickable
            allergies={['메밀', '땅콩']}
            eatingHabits_free={true}
            />

            <StandardButton title='결과보기'/>
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