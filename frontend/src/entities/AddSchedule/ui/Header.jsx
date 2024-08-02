import styled from "styled-components";
import BackButton from '../../../assets/BackButton.svg'
import { useState } from "react";
import Modal from './Modal'
import { augustState, crntClickedDayState, crntClickedIndexOfSchedulesState, crntClickedMonthState } from '../../../shared/state/calendar'
import { useRecoilState, useRecoilValue } from 'recoil'
import trash from '../../../assets/trash.svg'
import DeleteModal from "./DeleteModal"

function Header() {

    const crntClickedMonth = useRecoilValue(crntClickedMonthState)
    const crntClickedDay = useRecoilValue(crntClickedDayState)

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)

    const august = useRecoilValue(augustState)
    const crntClickedIndexOfSchedules = useRecoilValue(crntClickedIndexOfSchedulesState)
    const crntSchedule = august[crntClickedDay][crntClickedIndexOfSchedules]

    function handleBackButtonClick() {
        setIsModalVisible(true)
    }

    function handleDeleteClick() {
        setIsDeleteModalVisible(true)
    }

    const handleModalClick = () => {
        setIsModalVisible(false);
    };

    const handleDeleteModalClick = () => {
        setIsDeleteModalVisible(false);
    };

    return (
        <MainLayout>
            <StyledBackButton
                src={BackButton}
                onClick={handleBackButtonClick}
            />

            <Date>
                {crntClickedMonth}월 {crntClickedDay + 1}일 요일
            </Date>

            
            <StyledBackButton
                src={trash}
                onClick={handleDeleteClick}
                style={{visibility: !crntSchedule ? 'hidden' : 'visible'}}
            />


            {/* 모달 */}
            {isModalVisible && (
                <StyledModalContainer onClick={handleModalClick}>
                    <StyledModal onClick={(e) => e.stopPropagation()}>
                        <Modal setIsModalVisible={setIsModalVisible} />
                    </StyledModal>
                </StyledModalContainer>
            )}

            {/* 삭제 모달 */}
            {isDeleteModalVisible && (
                <StyledModalContainer onClick={handleDeleteModalClick}>
                    <StyledDeleteModal onClick={(e) => e.stopPropagation()}>
                        <DeleteModal setIsDeleteModalVisible={setIsDeleteModalVisible} />
                    </StyledDeleteModal>
                </StyledModalContainer>
            )}
        </MainLayout>
    )
}
export default Header;

const MainLayout = styled.div`
width: 100%;
height: 5.6rem;
display:flex;
justify-content: space-between;
align-items: center;
padding: 0 2rem 0 2rem;
`

const Date = styled.div`
color: #262829;
text-align: center;
font-family: "Noto Sans KR";
font-size: 1.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const StyledBackButton = styled.img`
width:3.6rem;
height:3.6rem;
cursor:pointer;
`

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
    height: 24.8rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    @media(max-width: 428px) {
        width:88%
    }
`;

const StyledDeleteModal = styled.div`
    width: 38rem;
    // height: 24.8rem;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    @media(max-width: 428px) {
        width:88%
    }
`;