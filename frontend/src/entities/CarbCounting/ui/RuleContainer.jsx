import styled from "styled-components";
import checkbox from '../../../assets/checkbox.svg';

function RuleContainer(){
    return(
        <Wrapper>
            <TipIcon>TIPS!</TipIcon>
            <Title>이렇게 사진을 찍어주세요!</Title>
            <Content>
                <Checkbox src={checkbox}/>
                <RuleContent>음식을 <span style={{color: "#EF6038"}}>한 화면 안</span>에 위치해주세요</RuleContent>
            </Content>
            <Content>
                <Checkbox src={checkbox}/>
                <RuleContent>음식이 <span style={{color: "#EF6038"}}>정중앙</span>에 위치하도록 해주세요</RuleContent>
            </Content>
            <Content>
                <Checkbox src={checkbox}/>
                <RuleContent>음식이 가려지거나<br></br><span style={{color: "#EF6038"}}>겹치지 않도록 정리</span>해주세요</RuleContent>
            </Content>
            
        </Wrapper>
    );

}

export default RuleContainer;

const Wrapper = styled.div`
border-radius: 16px;
border: 1px solid var(--Gray2, #E3E5E7);
background: #FFF;
height: 34.9rem;
padding : 2rem 2rem 2rem 2rem;
`

const TipIcon = styled.div`
display: inline-flex;
padding: 2px 8px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 20px;
background: var(--Primary-color1, #EF6038);
color: var(--White, #FFF);
font-family: "Noto Sans KR";
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

const Title=styled.div`
color: var(--Gray8, #262829);
font-family: "Noto Sans KR";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 0.4rem;
`

const Content = styled.div`
height: 8rem;
padding: 8px 0 8px 0;
border-radius: 8px;
background: #F4F4F4;
margin-top: 0.8rem;
display: flex;
align-items: center;
position: relative;
`

const Checkbox = styled.img`
height: 28px;
position: absolute;
left: 8px;
`

const RuleContent = styled.div`
position: absolute;
left: 4.8rem;
color: var(--Gray8, #262829);
font-family: "Noto Sans KR";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 21px */
`