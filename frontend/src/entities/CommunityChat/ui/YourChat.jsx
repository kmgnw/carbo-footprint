import styled from "styled-components";
import logo from '../../../assets/logo_contributor.svg'

function YourChat({ name, date, chat }) {
    return (
        <MainLayout>
            <ChatWrap>

                <ProfileWrap>
                    <ProfilePicWrap>
                        <Img src={logo} />
                    </ProfilePicWrap>

                    <Name>{name}</Name>
                </ProfileWrap>

                <Chat>
                    {chat}
                </Chat>

                <Date>
                    <div>
                        {date}
                    </div>
                </Date>
            </ChatWrap>
        </MainLayout>
    )
}
export default YourChat;

const MainLayout = styled.div`
width: 100%;
padding: 1.2rem 2rem;
display: flex;
justify-content: start;
`

const ChatWrap = styled.div`
display: flex;
gap: 0.8rem;
`

const Date = styled.div`
display: flex;
flex-direction: column;
justify-content:end;
color: #BABEC0;
font-family: "Noto Sans KR";
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`

const Chat = styled.div`
border-radius: 16px;
border: 1px solid #E3E5E7;
background: #FFF;
padding: 0.8rem 1.6rem;
color: #262829;
font-family: "Pretendard Variable";
font-size: 1.4rem;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 21px */
max-width: 26ch;
overflow-wrap: break-word;
`

const ProfileWrap = styled.div`

`
const ProfilePicWrap = styled.div`
width: 4rem;
height: 4rem;
border: 1px solid #E3E5E7;
border-radius: 50%;
background-color: white;
object-fit: contain;
padding: 0.5rem;
margin-bottom: 0.4rem;
`

const Img = styled.img`
width: 100%;
`

const Name = styled.div`
color: #262829;
text-align: center;
font-family: "Pretendard Variable";
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`