import styled from "styled-components";

function MyChat({ date, chat }) {
    return (
        <MainLayout>
            <ChatWrap>
                <Date>
                    <div>
                        {date}
                    </div>
                </Date>

                <Chat>
                    {chat}
                </Chat>
            </ChatWrap>
        </MainLayout>
    )
}
export default MyChat;

const MainLayout = styled.div`
width: 100%;
padding: 1.2rem 2rem;
display: flex;
justify-content: end;
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
background: #EF6038;
padding: 0.8rem 1.6rem;
color: #FFF;
font-family: "Noto Sans KR";
font-size: 1.4rem;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 21px */
max-width: 26ch;
overflow-wrap: break-word;
`