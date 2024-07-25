import styled from "styled-components"
import StandardButton from "../../../shared/components/StandardButton/StandardButton"
import pretzel from '../../../assets/pretzel_community.svg'
import users from '../../../assets/Users_community.svg'
import { useNavigate } from "react-router-dom"

function RoomCell({title, count}){

    const navigate = useNavigate()

    function handleButtonClick(){
        navigate('/community-chat')
    }

    return(
        <MainLayout>

            <TitleWrap>

                <Heading>
                    <LogoWrap>
                        <img src={pretzel} />
                    </LogoWrap>

                    <Title>
                        {title}
                    </Title>
                </Heading>

                <Trailing>
                    <CountWrap>
                        <img src={users} />

                        <CountText>
                            {count}/10
                        </CountText>
                    </CountWrap>
                </Trailing>

            </TitleWrap>

            <StandardButton
            title='입장하기'
            onClick={handleButtonClick}
            />


        </MainLayout>
    )
}

export default RoomCell

const MainLayout = styled.div`
width:100%;
padding: 2rem;
border-radius: 16px;
background: #FFF;
box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.20);
`

const TitleWrap = styled.div`
display: flex;
margin-bottom: 3.9rem;
justify-content: space-between;
`

const LogoWrap = styled.div`
background-color: #F2F3F5;
border-radius: 50%;
padding: 0.9rem;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #E3E5E7
`

const Heading = styled.div`
display: flex;
gap: 1.2rem;
align-items: center;
`

const Trailing= styled.div`
display: flex;
align-items: center;
`

const Title = styled.div`
  color: #262829;
  font-family: "Noto Sans KR";
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  max-width: 10ch; /* limits to 10 characters */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;


const CountWrap = styled.div`
display:flex;
align-items: center;
justify-content: center;
border-radius: 4px;
background: #E3E5E7;
padding: 0.4rem 0.8rem;
gap: 0.4rem;
`

const CountText = styled.div`
color: #7D7F82;
text-align: center;
font-family: "Noto Sans KR";
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`