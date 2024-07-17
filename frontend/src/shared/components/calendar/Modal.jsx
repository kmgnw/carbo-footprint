import styled from "styled-components";
import { augustState } from '../../state/calendar';
import { useRecoilState } from 'recoil';
import { useState } from "react";


function Modal ({ setIsModalVisible, index }){

    const [isReadOnly, setIsReadOnly] = useState(true)

    const [schedule, setSchedule] = useRecoilState(augustState)


    function handleBtnClick(){
        setIsModalVisible(false)
    }

    function handleAddScheduleClick(){
        if(isReadOnly){setIsReadOnly(false)}
        else {setIsReadOnly(true)}
    }

    function handleScheduleChange(e, i) {
        const updatedSchedule = schedule.map((daySchedule, dayIndex) => {
            if (dayIndex === index) {
                return daySchedule.map((item, itemIndex) => {
                    if (itemIndex === i) {
                        return e.target.value;
                    }
                    return item;
                });
            }
            return daySchedule;
        });
        setSchedule(updatedSchedule);
    }


    return(
        <StyledWrap>
            <StyledHeader>
                {/* 레이아웃 용 빈 div */}
                <div />

                <StyledTitle>8월 {index}일</StyledTitle>

                <StyledButton onClick={handleBtnClick}>완료</StyledButton>
            </StyledHeader>

            <StyledFlexbox>
                <StyledAddButton onClick={handleAddScheduleClick}>일정추가</StyledAddButton>
            </StyledFlexbox>

            <StyledScheduleWrap>

                {schedule[index].map((e, i)=>(
                    <StyledInput
                    key={i}
                    value={e}
                    placeholder={e}
                    readOnly={isReadOnly}
                    onChange={(text) => handleScheduleChange(text, i)}
                />
                ))}
                
            </StyledScheduleWrap>
        </StyledWrap>
    )
}

export default Modal;

const StyledWrap = styled.div`
display: flex;
flex-direction: column
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
`

const StyledFlexbox = styled.div`
display: flex;
justify-content: end;
padding-right: 16px;
margin-top: 21px;
`

const StyledAddButton = styled.div`
color: #FF6464;
font-family: "Pretendard Variable";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const StyledInput =  styled.input`
border: none;
&:focus {
        border: none;
        outline: none
    }

&[readonly] {
background-color: #f5f5f5;
}

`