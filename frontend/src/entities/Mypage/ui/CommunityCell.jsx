import styled from "styled-components"
import pretzel from '../../../assets/pretzel_red.svg'
import users from '../../../assets/Users_community.svg'

function CommunityCell(){
    return(
        <MainLayout>
            <DateWrap>00.00.0요일</DateWrap>

            <TitleWrap>

                <LogoWrap>
                    <Img src={pretzel} />
                </LogoWrap>

                <Title>
                    방제목은열글자까지만
                </Title>

                <CountWrap>
                    00
                </CountWrap>

                <Trailing>
                    <CountIconWrap>
                        <img src={users} />

                        <CountIconText>
                            0/10
                        </CountIconText>
                    </CountIconWrap>
                </Trailing>

            </TitleWrap>
        </MainLayout>
    )
}

export default CommunityCell

const MainLayout = styled.div`
padding: 1.6rem;
border-radius: 16px;
background: #F2F3F5;
box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.20);
`

const DateWrap = styled.div`
display: inline-block;
color: #FFF;
font-family: "Noto Sans KR";
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
padding: 0.4rem 1.3rem;
border-radius: 20px;
background-color:#BABEC0;
margin-bottom: 0.8rem
`

const LogoWrap = styled.div`
border: 1px solid #E3E5E7;
background-color:#F2F3F5;
display: flex;
justify-content: center;
align-items: center;
padding: 0.9rem 0.7rem;
border-radius: 50%;
`

const Img = styled.img`
width: 3.2rem;
`

const TitleWrap = styled.div`
display: flex;
align-items: center;
`

const Title = styled.div`
color: #000;
font-family: "Noto Sans KR";
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 0 0.8rem
`

const CountWrap = styled.div`
color: #FFF;
font-family: "Noto Sans KR";
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding: 0.3rem 0.4rem;
border-radius: 50%;
background: #EF6038;
margin-right: 3.4rem;
`



const Trailing= styled.div`
display: flex;
align-items: center;
`


const CountIconWrap = styled.div`
display:flex;
align-items: center;
justify-content: center;
border-radius: 4px;
background: #E3E5E7;
padding: 0.4rem 0.8rem;
gap: 0.4rem;
`

const CountIconText = styled.div`
color: #7D7F82;
text-align: center;
font-family: "Noto Sans KR";
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`