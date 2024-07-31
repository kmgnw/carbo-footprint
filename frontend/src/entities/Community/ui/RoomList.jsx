import styled from "styled-components";
import { useEffect, useState } from "react";
import StandardButton from "../../../shared/components/StandardButton/StandardButton";
import RoomCell from "./RoomCell";
import Modal from './Modal';
import { RoomState } from "../../../shared/state/Community";
import { useRecoilState } from "recoil";
import { fetchRooms } from "../api/api";

function RoomList() {
    const [rooms, setRooms] = useRecoilState(RoomState);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModalClick = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        fetchRooms(setRooms);
    }, []);

    return (
        <>
            <MainLayout>
                <Heading>
                    <TitleWrap>
                        <SubTitle>같은 목표를 가지고 대화하기</SubTitle>
                        <Title>이런 챌린지를 하고 있어요</Title>
                    </TitleWrap>

                    <StandardButton
                        title='방만들기'
                        padding="1.2rem 2rem"
                        onClick={() => setIsModalVisible(true)}
                    />
                </Heading>

                <RoomWrap>
                    {rooms.map((e, i) => (
                        <RoomCell
                            key={i}
                            index={i}
                            title={e.room_name}
                            count={e.room_current_capacity}
                            maxCount={e.room_max_capacity}
                            roomId={e.room_id}
                        />
                    ))}
                </RoomWrap>
            </MainLayout>

            {isModalVisible && (
                <StyledModalContainer onClick={handleModalClick}>
                    <StyledModal onClick={(e) => e.stopPropagation()}>
                        <Modal setIsModalVisible={setIsModalVisible} />
                    </StyledModal>
                </StyledModalContainer>
            )}
        </>
    );
}

export default RoomList;

const MainLayout = styled.div`
    padding: 4.2rem 2rem;
    background-color: #F2F3F5;
    width: 100%;
`;

const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.4rem;
`;

const TitleWrap = styled.div``;

const SubTitle = styled.div`
    color: #7D7F82;
    font-family: "Noto Sans KR";
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const Title = styled.div`
    color: #262829;
    font-family: "Noto Sans KR";
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const RoomWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`;

const StyledModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;

const StyledModal = styled.div`
    width: 38rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 428px) {
        width: 88%;
    }
`;