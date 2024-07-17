import styled from "styled-components";

import card from '../../../assets/randomImage.png'

function FootprintCounter(){
    return(
        <MainLayout>
            <Img src={card} />
            <div>
            <Content>탄수 발자국 연속 <Count>24</Count>회째</Content>
            </div>
        </MainLayout>
    )
}

export default FootprintCounter;

const MainLayout = styled.div`
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
margin-bottom: 24px;
border-radius: 24px;
padding: 0 20px 0 20px
`

const Img = styled.img`
width: 48px;
height: 48px;
`

const Content = styled.div`
color: #000;
font-family: "Pretendard Variable";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 21px */
`

const Count = styled.span`
color: #000;
font-family: "Pretendard Variable";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 0 4px 0 4px;
`