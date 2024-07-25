import styled from "styled-components"
import Choices_nonclickable from "../../../shared/components/choices_nonclickable/Choices_nonclickable"



function SelectedKeyword(){
    return(
        <MainLayout>
            <Title>선택한 키워드</Title>

            <Choices_nonclickable
            allergies={['메밀', '땅콩']}
            eatingHabits_free={true}
            eatingHabits={[]}
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