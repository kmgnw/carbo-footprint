import styled from "styled-components";
import X from '../../../assets/X.svg';
import door from '../../../assets/DoorOpen.svg';
import users from '../../../assets/Users_createRoom.svg';
import StandardButton from "../../../shared/components/StandardButton/StandardButton";
import { RoomState } from "../../../shared/state/Community";
import { useRecoilState } from "recoil";
import StandardInput from "../../../shared/components/StandardInput/StandardInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Modal({ setIsModalVisible }) {
    const navigate = useNavigate()

    const [room, setRoom] = useRecoilState(RoomState);
    const [roomName, setRoomName] = useState('');
    const [count, setCount] = useState('');

    function handleCancelClick() {
        setIsModalVisible(false);
    }

    function handleRoomNameChange(e) {
        setRoomName(e);
    }

    function handleCountChange(e) {
        setCount(e);
    }

    function handleButtonClick(){
        setRoom((prev)=>[...prev, {
            title: roomName,
            count: count
        }])

        setIsModalVisible(false)

        navigate('/community-chat')
    }

    const isActivate = (roomName !== '' && count !== '')

    return (
        <MainLayout>
            <Header>
                <img
                    style={{ visibility: 'hidden' }}
                    src={X}
                    onClick={handleCancelClick}
                    alt="Close"
                />
                방만들기
                <img src={X} onClick={handleCancelClick} alt="Close" />
            </Header>

            <InputSection>
                <TitleWrap>
                    <img src={door} alt="Door" />
                    <Title>방 이름</Title>
                </TitleWrap>

                <StandardInput
                    placeholder={'10자 이내로 작성해주세요.'}
                    onChange={handleRoomNameChange}
                    value={roomName}
                />

                <Height4rem />

                <TitleWrap>
                    <img src={users} alt="Users" />
                    <Title>인원 수</Title>
                </TitleWrap>

                <InputWrap>
                    <StandardInput
                        placeholder={'최대 40명'}
                        width={'14rem'}
                        onChange={handleCountChange}
                        value={count}
                    />
                    <Text>명</Text>
                </InputWrap>
            </InputSection>

            <ButtonWrap>
                <StandardButton
                    title='방 만들기'
                    color={isActivate ? 'white': '#BABEC0'}
                    backgroundColor={isActivate ? 'black': '#E3E5E7'}
                    onClick={handleButtonClick}
                />
            </ButtonWrap>
        </MainLayout>
    );
}

export default Modal;

const MainLayout = styled.div`
    border-radius: 2rem;
    background: white;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.3rem 2rem;
    color: #212224;
    text-align: center;
    font-family: "Noto Sans KR";
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    border-bottom: 1px solid #DCDFE3;
`;

const InputSection = styled.div`
    padding: 4.1rem 2rem 8rem 2rem;
`;

const TitleWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 0.9rem;
    margin-bottom: 1rem;
`;

const Title = styled.div`
    color: #000;
    font-family: "Noto Sans KR";
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const Height4rem = styled.div`
    height: 4rem;
`;

const InputWrap = styled.div`
    display: flex;
    gap: 0.8rem;
    align-items: center;
`;

const Text = styled.div`
    color: #BABEC0;
    font-family: "Noto Sans KR";
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const ButtonWrap = styled.div`
    padding: 0 2rem 2rem 2rem;
`;