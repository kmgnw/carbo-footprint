import styled from "styled-components"
import pretzel from '../../../assets/pretzel_red.svg'
import users from '../../../assets/Users_community.svg'
import { crntClickedRoomIdState } from "../../../shared/state/Community"
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { hoverGrow } from "../../../shared/animation/hoverGrow"

function CommunityCell({room_name, room_current_capacity, room_max_capacity, unchecked_message_count, room_id}){

    const [_, setCrntClickedId] = useRecoilState(crntClickedRoomIdState)
    const navigate = useNavigate()

    function handleCellClick(){
        setCrntClickedId(room_id)
        navigate('/community-chat', { state: { from: 'mypage' } })
    }

    return(
        <MainLayout onClick={handleCellClick}>
            <DateWrap>00.00.0요일</DateWrap>

            <TitleWrap>
                <HeadingWrap>
                <LogoWrap>
                    <Img src={pretzel} alt="pretzel" fetchPriority="high"/>
                </LogoWrap>

                <Title>
                    {room_name}
                </Title>

                <CountWrap>
                    {unchecked_message_count}
                </CountWrap>
                </HeadingWrap>

                <Trailing>
                    <CountIconWrap>
                        <img src={users} alt="users" fetchPriority="high"/>

                        <CountIconText>
                            {room_current_capacity}/{room_max_capacity}
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
margin-bottom: 1.6rem;
cursor:pointer;
${hoverGrow}
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

const HeadingWrap=styled.div`
display: flex;
align-items: center;
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
justify-content: space-between;
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
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: normal;
background: #EF6038;
// margin-right: 3.4rem;
width: 2.2rem;
height: 2.2rem;
border-radius: 50%;
display: flex;
justify-content:center;
align-items: center;
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