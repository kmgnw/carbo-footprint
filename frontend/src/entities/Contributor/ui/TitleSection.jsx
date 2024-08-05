import styled from "styled-components"
import logo from '../../../assets/logo_white.svg'
import logotext from '../../../assets/logotext_contributor.svg'

function TitleSection() {
    return (
        <MainLayout>

            <LogoWrap>

                <LogoContainer>
                    <Img src={logo} alt="logo" fetchPriority="high"/>
                </LogoContainer>

                <img src={logotext} alt="logotext" fetchPriority="high"/>
            </LogoWrap>

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

const LogoWrap = styled.div`
display: flex;
margin-bottom: 0.8rem
`

const LogoContainer = styled.div`
width:3.2rem;
height: 3.2rem;
border-radius: 12px;
background: #EF6038;
object-fit: contain;
margin-right: 0.8rem;
padding:0.4rem;
`

const Img = styled.img`
width:100%;
`

const SubTitle = styled.div`
color: #000;
font-family: "Noto Sans KR";
font-size: 1.2rem;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 18px */
`

