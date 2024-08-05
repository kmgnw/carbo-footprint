import styled from "styled-components";
import Like from '../../../assets/Like.svg'
import Choices from "./Choices";
import NotPickyButton from "./NotPickyButton";

function EatingHabit() {

    return (
        <MainLayout>
            <img src={Like} alt="like" fetchPriority="high"/>

            <Title>
                좋아하는 키워드를<br />
                골라주세요!
            </Title>

            <SubTitle>
                중복 선택도 가능해요.
            </SubTitle>

            <Choices
                title='title'
                choices={['아재입맛', '다이어트', '초딩입맛', '향신료', '비건', '날것', '육류', '채소류', '과일류', '슴슴한', '자극적인', '달달한']}
                type='eating-habit'
            />

            <NotPickyButton
                title='가리는 것 없음'
                type='eating-habit'
            />

            <Height22REM />

        </MainLayout>
    )
}

export default EatingHabit;

const MainLayout = styled.div`
padding: 9.2rem 1.9rem;
display: flex;
flex-direction: column;
align-items: center;
`

const Title = styled.div`
margin-top:1.6rem;
margin-bottom:0.8rem;
color: #262829;
text-align: center;
font-family: "Noto Sans KR";
font-size: 1.6rem;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 24px */
`

const SubTitle = styled.div`
color: #EF6038;
text-align: center;
font-family: "Noto Sans KR";
font-size: 1.2rem;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 18px */
margin-bottom: 10rem
`

const Height22REM = styled.div`
height: 22rem
`