import styled from "styled-components"
import logo from '../../../assets/logo_contributor.svg'

function ContributorCell({img , name, roles, email}){
    return(
        <MainLayout>

            <LogoWrap>
                <Img src={img} alt="img" fetchPriority="high"/>
            </LogoWrap>

            <ContentWrap>
                <NameWrap>

                    <Name>{name}</Name>

                    {roles.map((e)=>(
                        <Role>{e}</Role>
                    ))}

                </NameWrap>

                <SchoolWrap>
                    한성대학교
                </SchoolWrap>

                <SchoolWrap>
                    {email}
                </SchoolWrap>

            </ContentWrap>

        </MainLayout>
    )
}

export default ContributorCell

const MainLayout = styled.div`
width: 100%;
border-radius: 12px;
border: 1px solid #E3E5E7;
background-color: #FFF;
padding: 1.7rem;
display: flex;
margin-top: 0.8rem;
gap: 1.6rem;
`

const LogoWrap = styled.div`
width: 8rem;
height: 8rem;
background-color: #F2F3F5;
border: 1px solid #E3E5E7;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%
`

const Img = styled.img`
width: 8rem;
height: 8rem;
`

const NameWrap = styled.div`
display: flex;
align-items: center;
`

const Name = styled.div`
color: #262829;
font-family: "Noto Sans KR";
font-size: 1.4rem;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 21px */
margin-right: 0.8rem
`

const ContentWrap = styled.div`
display: flex;
flex-direction: column;
gap: 0.4rem;
`

const Role = styled.div`
padding: 0.5rem 1.3rem;
border-radius: 50px;
background-color: #EF6038;
color: white;
font-family: "Noto Sans KR";
font-size: 1.2rem;
font-style: normal;
font-weight: 700;
line-height: 150%;
margin-right: 0.4rem
`

const SchoolWrap = styled.div`
color: #7D7F82;
font-family: "Noto Sans KR";
font-size: 1.2rem;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 18px */
`