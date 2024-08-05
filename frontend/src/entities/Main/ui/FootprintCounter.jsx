import styled from "styled-components";
import Logo_orange from '../../../assets/Logo_orange.svg'
import { useEffect, useState } from "react";
import { fetchAttendanceCount } from "../api/api";

function FootprintCounter(){

    const [count, setCount] = useState(0)

    useEffect(()=>{
        fetchAttendanceCount(setCount)
    }, [])

    return(
        <MainLayout>

            <LogoWrap>
                <img src={Logo_orange} fetchPriority="high" alt="logo"/>
            </LogoWrap>


            <div>
            <Content>탄수 발자국 연속 <Count>{count}</Count>회째</Content>
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
padding: 0 20px 0 20px;
box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.20);
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
color: var(--Primary-color1, #EF6038);
text-align: center;
font-family: "Noto Sans KR";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding: 0 4px 0 4px;
`

const LogoWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 4.8rem;
height: 4.8rem;
padding: 1.8rem;
border-radius: 20px;
border: 1px solid var(--Gray2, #E3E5E7);
background: var(--Gray1, #F2F3F5);
`