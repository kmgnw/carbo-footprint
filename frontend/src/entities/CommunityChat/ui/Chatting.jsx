import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import send from '../../../assets/send_community.svg';
import send_active from '../../../assets/send_active_community.svg';
import MyChat from "./MyChat";
import YourChat from "./YourChat";
import EntryInfo from "./EntryInfo";
import ExitInfo from "./ExitInfo";

function Chatting() {
    const [input, setInput] = useState('');
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(input !== '');
    }, [input]);

    const chattings = [
        {
            type: 'me',
            date: '00:00',
            chat: '열여섯글자까지만나오고다음은넘어가게'
        },
        {
            type: 'you',
            date: '00:00',
            chat: '열여섯글자까지만나오고다음은넘어가게',
            name: '아이디'
        },
        {
            type: 'in',
            name: '홍길동'
        },
        {
            type: 'out',
            name: '홍길동'
        }
    ];

    return (
        <>
            <MainLayout>
                {chattings.map((e, index) => {
                    if (e.type === 'me') {
                        return (
                            <MyChat
                                key={index}
                                date={e.date}
                                chat={e.chat}
                            />
                        );
                    } else if (e.type === 'you') {
                        return (
                            <YourChat
                                key={index}
                                date={e.date}
                                chat={e.chat}
                                name={e.name}
                            />
                        );
                    } else if (e.type === 'in') {
                        return (
                            <EntryInfo
                                key={index}
                                name={e.name}
                            />
                        );
                    } else if (e.type === 'out') {
                        return (
                            <ExitInfo
                                key={index}
                                name={e.name}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </MainLayout>

            <InputWrap>
                <InputContainer>
                    <Input
                        placeholder='챗봇'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </InputContainer>

                <Img src={isActive ? send_active : send} />
            </InputWrap>
        </>
    );
}

export default Chatting;

const MainLayout = styled.div`
    flex: 1;
    width: 100%;
    height: 93vh;
    background-color: #F2F3F5;
    padding-top: 1.2rem;
    overflow-y: auto;
    padding-bottom: 6rem;
`;

const InputWrap = styled.div`
    position: fixed;
    bottom: 0;
    width: 430px;
    padding: 1.2rem 2rem;
    background-color: white;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    box-shadow: 4px 0px 16px 0px rgba(0, 0, 0, 0.10);

    @media (max-width: 428px) {
        width: 100%;
    }
`;

const InputContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: 1px solid #E3E5E7;
    background-color: #F2F3F5;
    padding: 0.9rem 1.6rem;

    &:focus-within {
        border: 1px solid #EF6038;
    }
`;

const Input = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    height: 100%;
    width: 100%;

    &::placeholder {
        color: #BABEC0;
    }

    &:focus::placeholder {
        color: transparent;
    }
`;

const Img = styled.img``;