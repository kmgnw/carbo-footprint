import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import send from '../../../assets/send_community.svg';
import send_active from '../../../assets/send_active_community.svg';
import MyChat from './MyChat';
import YourChat from './YourChat';
import EntryInfo from './EntryInfo';
import ExitInfo from './ExitInfo';
import { fetchPrevChattings } from '../api/api';
import { useRecoilValue } from 'recoil';
import { RoomState } from '../../../shared/state/Community';
import { crntClickedRoomIdState } from '../../../shared/state/Community';

const Chatting = () => {
    const [input, setInput] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [chattings, setChattings] = useState([]);
    const crntClickedId = useRecoilValue(crntClickedRoomIdState);
    const [wsUrl, _] = useState('https://api.carbofootprint.site/ws');
    const rooms = useRecoilValue(RoomState);
    const [chatRoomId, setChatRoomId] = useState(-1);
    const messagesEndRef = useRef(null);

    let stompClient = useRef(null);

    useEffect(() => {
        setChatRoomId(Number(crntClickedId));
    }, [crntClickedId, rooms]);

    useEffect(() => {
        if (chatRoomId === -1) return;

        fetchPrevChattings(setChattings, chatRoomId);
        connect();

        return () => {
            disconnect();
        };
    }, [chatRoomId]);

    useEffect(() => {
        setIsActive(input !== '');
    }, [input]);

    function typeValidator(msg) {
        switch (msg.type) {
            case 'you':
                if (msg.sender_username === window.sessionStorage.getItem('userId')) {
                    return 'me';
                } else {
                    return 'you'
                }
            case 'me':
                if (msg.sender_username !== window.sessionStorage.getItem('userId')) {
                    return 'you';
                } else {
                    return 'me'
                }
            default:
                return msg.type;
        }
    }

    const connect = () => {
        const token = window.sessionStorage.getItem('token');
        const socket = new SockJS(`${wsUrl}?token=${encodeURIComponent(token)}`);
        stompClient.current = Stomp.over(socket);

        stompClient.current.connect({}, (frame) => {
            console.log('Connected: ' + frame);
            stompClient.current.subscribe(`/topic/${chatRoomId}`, (message) => {
                console.log('message body:', message.body);
                const parsedMessage = JSON.parse(message.body);
                setChattings((prev) => [
                    ...prev,
                    {
                        type: typeValidator(parsedMessage),
                        date: parsedMessage.date,
                        chat: parsedMessage.chat,
                        name: parsedMessage.sender_username
                    }
                ]);
            });
            sendEnterMessage();
        }, (error) => {
            console.error('Error: ' + error);
        });
    };

    const disconnect = () => {
        if (stompClient.current) {
            stompClient.current.disconnect(() => {
                console.log('Disconnected');
            });
        }
    };


    const sendMessage = () => {
        const chatMessage = {
            content: input,
            chat_room_id: chatRoomId
        };
        stompClient.current.send("/app/chat.sendMessage", {}, JSON.stringify(chatMessage));
        setInput('');
    };

    const sendEnterMessage = () => {
        const chatMessage = {
            chat_room_id: chatRoomId
        };
        stompClient.current.send("/app/chat.enterRoom", {}, JSON.stringify(chatMessage));
    };

    const showMessage = (message) => {
        console.log('showing' + message);
        setChattings(prevChattings => [...prevChattings, JSON.parse(message)]);
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

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
                <div ref={messagesEndRef} />
            </MainLayout>

            <InputWrap>
                <InputContainer>
                    <Input
                        placeholder='챗봇'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </InputContainer>

                <Img
                    src={isActive ? send_active : send}
                    style={{ cursor: 'pointer' }}
                    onClick={sendMessage}
                />
            </InputWrap>
        </>
    );
};

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

const Img = styled.img`
    cursor: pointer; /* Add cursor pointer to indicate clickability */
`;