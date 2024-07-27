import styled from "styled-components"

function TitleSection(){
    return(
        <MainLayout>
            <SubTitle>
            탄수 발자국 제작자들은 현대인 식습관의 발자취를 따라 <br />
            건강한 탄수화물 섭취를 위한 서비스를 제공하려 노력하고 있습니다.
            </SubTitle>
        </MainLayout>
    )
}

export default TitleSection

const MainLayout = styled.div`
padding: 2.4rem 2.1rem
`

const SubTitle = styled.div`
color: #000;
font-family: "Noto Sans KR";
font-size: 1.2rem;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 18px */
`