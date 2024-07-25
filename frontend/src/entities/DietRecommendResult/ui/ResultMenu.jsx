import styled from "styled-components"
import pretzel from '../../../assets/Pretzel.svg'
import MenuCell from "./MenuCell"

function ResultMenu(){
    return(
        <MainLayout>

            <TitleWrap>
                <Logo src={pretzel}/>
                <Title>이런 메뉴는 어떤가요?</Title>
            </TitleWrap>
            
            <MenuCell
            title='음식 이름'
            categories={['카테고리','카테고리']}
            calories='000'
            carb='00'
            sugar='00'
            />
            <MenuCell
            title='음식 이름'
            categories={['카테고리','카테고리']}
            calories='000'
            carb='00'
            sugar='00'
            />
            <MenuCell
            title='음식 이름'
            categories={['카테고리','카테고리']}
            calories='000'
            carb='00'
            sugar='00'
            />

            
        </MainLayout>
    )
}

export default ResultMenu

const MainLayout = styled.div`
background-color: #F2F3F5;
height: 57rem;
padding: 2.4rem 2rem;
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