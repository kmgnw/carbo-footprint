import styled from "styled-components";
import Logo_orange from '../../../assets/Logo_orange.svg'

function HeadingTitle(){
    return(
    <MainLayout>
        
        <img style={{width: '40px'}} src={Logo_orange} alt="logo" fetchPriority="high"/>

        <Title>오늘의 탄수 발자국을 기록해보세요.</Title>
    </MainLayout>
    )
}
export default HeadingTitle;

const MainLayout = styled.div`
padding-top: 4rem;
display: flex;
flex-direction: column;
align-items: center;
`

const Title = styled.div`
color: #000;
text-align: center;
font-family: "Noto Sans KR";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 0.8rem;
`