import styled from "styled-components";
import { augustState } from '../../state/calendar';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useState } from "react";
import PlusCircle from '../../../assets/PlusCircle.svg'
import X from '../../../assets/X.svg'
import randomImage from '../../../assets/randomImage.png'
import { useNavigate } from "react-router-dom";
import ActivityLog from '../../../assets/ActivityLog.svg'
import DietLog from '../../../assets/DietLog.svg'
import ActivityLog_clicked from '../../../assets/ActivityLog_clicked.svg'
import DietLog_clicked from '../../../assets/DietLog_clicked.svg'
import bread from '../../../assets/breadIcon.svg'
import { crntClickedIndexOfSchedulesState } from "../../state/calendar";

function Modal({ setIsModalVisible, index, day }) {

    const navigate = useNavigate()

    const [isReadOnly, setIsReadOnly] = useState(true)

    const [crntClickedIndexOfSchedules, setCrntClickedIndexOfSchedules] = useRecoilState(crntClickedIndexOfSchedulesState)

    const [schedule, setSchedule] = useRecoilState(augustState)
    const august = useRecoilValue(augustState)

    function isDietLog(e) {
        if (e.firstMeal.length !== 0 ||
            e.secondMeal.length !== 0 ||
            e.thirdMeal.length !== 0 ||
            e.extraMeal.length !== 0
        ) { return true }
        else { return false }
    }


    function isActivityLog(e) {
        if (e.workoutTime && e.workoutTime !== '' ||
            e.stepCount && e.stepCount !== ''
        ) { return true }
        else { return false }
    }


    function handleBtnClick() {
        setIsModalVisible(false)
    }

    function handleAddScheduleClick() {
        navigate('/add-schedule')
    }

    function handleScheduleChange(e, i) {
        const updatedSchedule = schedule.map((daySchedule, dayIndex) => {
            if (dayIndex === index) {
                return daySchedule.map((item, itemIndex) => {
                    if (itemIndex === i) {
                        return { ...item, title: e.target.value };
                    }
                    return item;
                });
            }
            return daySchedule;
        });
        setSchedule(updatedSchedule);
    }

    function handleCellClick(i){
        setCrntClickedIndexOfSchedules(i)
        navigate('/add-schedule')
    }
    return (
        <StyledWrap>
            <StyledHeader>
                {/* 레이아웃 용 빈 div */}
                <div style={{ width: '24px' }} />

                <StyledTitle>8월 {index + 1}일 {day}요일</StyledTitle>

                <StyledButton onClick={handleBtnClick}>
                    <img src={X} alt="Close" style={{cursor:'pointer'}}/>
                </StyledButton>

            </StyledHeader>

            <StyledFlexbox>

                <StyledImgWrap>
                    <img src={PlusCircle} alt="Add" />
                </StyledImgWrap>

                <StyledAddButton onClick={handleAddScheduleClick}>일정추가</StyledAddButton>

            </StyledFlexbox>

            
                {august[index].length === 1 && august[index][0].title === '' ? (
                    <NoScheduleWrap>
                        <ImgWrap>
                            <Img src={bread} />
                        </ImgWrap>
                        <NoScheduleText>
                            아직 기록이 없습니다.<br />
                            오늘 당신의 탄수발자국을 남겨보세요!
                        </NoScheduleText>
                    </NoScheduleWrap>
                ) : (
                    august[index].map((e, i) => (
                        <StyledScheduleWrap>
                        <StyledScheduleContainer key={i} onClick={()=>handleCellClick(i)}>
                            <StyledInput
                                value={e.title}
                                placeholder={e.title}
                                readOnly={isReadOnly}
                                onChange={(text) => handleScheduleChange(text, i)}
                            />
                            <StyledButtonWrap>
                                <img
                                    style={{ width: '24px' }}
                                    src={isDietLog(e) ? DietLog_clicked : DietLog}
                                    alt="Diet Log"
                                />
                                <img
                                    style={{ width: '24px' }}
                                    src={isActivityLog(e) ? ActivityLog_clicked : ActivityLog}
                                    alt="Activity Log"
                                />
                            </StyledButtonWrap>
                        </StyledScheduleContainer>
                        </StyledScheduleWrap>
                    ))
                )}
            

        </StyledWrap>
    )
}

export default Modal;

const StyledWrap = styled.div`
display: flex;
flex-direction: column;
`

const StyledHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 49px;
border-bottom: 1px solid #D9D9D9;
padding: 0 16px 0 16px;
`

const StyledFlexbox = styled.div`
display: flex;
justify-content: end;
padding-right: 16px;
margin-top: 21px;
gap: 4px;
margin-bottom: 16px;
`

const StyledImgWrap = styled.div`
width: 20px;
display: flex;
justify-content: center;
align-items: center;
`

const StyledTitle = styled.div`
color: #000;
text-align: center;
font-family: "Pretendard Variable";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;

`

const StyledButton = styled.button`
border: none;
background-color: transparent;
color: #000;
text-align: center;
font-family: "Pretendard Variable";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const StyledScheduleWrap = styled.div`
display: flex;
flex-direction: column;
border-bottom: 1px solid var(--Gray2, #E3E5E7);
justify-content:center;
align-items: center
`

const StyledScheduleContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding: 20px 16px;
border-top: 1px solid var(--Gray2, #E3E5E7);
`

const StyledAddButton = styled.div`
color: #FF6464;
font-family: "Pretendard Variable";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-top: 2px;
cursor: pointer;
`

const StyledButtonWrap = styled.div`
display: flex;
gap: 8px;
`

const StyledInput = styled.input`
border: none;
&:focus {
        border: none;
        outline: none;
    }

&[readonly] {
background-color: #fffff;
}
`

const NoScheduleText = styled.div`
color: #BABEC0;
text-align: center;
font-family: "Noto Sans KR";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 24px */
`

const ImgWrap = styled.div`
width: 18.6rem;
height: 18.6rem;
object-fit: contain;
margin-bottom: 3.7rem;
`

const Img = styled.img`
width:100%;
`

const NoScheduleWrap = styled.div`
display:flex;
flex-direction: column;
align-items: center
`