import styled from "styled-components"
import bread from '../../../assets/bread_mypage.svg'

function NoData(){
    return(
        <MainLayout>
            <Img src={bread} fetchPriority="high" alt="bread"/>
            <Title>아직 기록이 없습니다.</Title>
        </MainLayout>
    )
}

export default NoData

const MainLayout = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Img = styled.img`
margin-bottom: 1.6rem;
`

const Title = styled.div`
color: #BABEC0;
text-align: center;
font-family: "Noto Sans KR";
font-size: 1.4rem;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 21px */
`
