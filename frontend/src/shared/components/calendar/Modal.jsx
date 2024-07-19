import styled from "styled-components";
import { augustState } from '../../state/calendar';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from "react";
import PlusCircle from '../../../assets/PlusCircle.svg'
import X from '../../../assets/X.svg'
import randomImage from '../../../assets/randomImage.png'

function Modal ({ setIsModalVisible, index, day }){

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
                <div style={{width: '24px'}}/>

                <StyledTitle>8월 {index+1}일 {day}요일</StyledTitle>

                <StyledButton onClick={handleBtnClick}>
                    <img src= {X} />
                </StyledButton>

            </StyledHeader>

            <StyledFlexbox>

                <StyledImgWrap>
                    <img src={PlusCircle} />
                </StyledImgWrap>

                <StyledAddButton onClick={handleAddScheduleClick}>일정추가</StyledAddButton>

            </StyledFlexbox>

            <StyledScheduleWrap>
                <StyledScheduleContainer>

                    {schedule[index].map((e, i)=>(
                        <StyledInput
                        key={i}
                        value={e}
                        placeholder={e}
                        readOnly={isReadOnly}
                        onChange={(text) => handleScheduleChange(text, i)}
                    />
                    ))}

                    <StyledButtonWrap>

                        {/* 임시 */}
                        <img style={{
                            width: '24px',
                        }} src={randomImage} />

                        <img style={{
                            width: '24px',
                        }} src={randomImage} />

                    </StyledButtonWrap>
                    

                </StyledScheduleContainer>
                
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

const StyledFlexbox = styled.div`
display: flex;
justify-content: end;
padding-right: 16px;
margin-top: 21px;
gap: 4px;
margin-bottom: 16px
`

const StyledImgWrap = styled.div`
width: 20px;
display: flex;
justify-content: center;
align_items: center;
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

const StyledScheduleContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 20px 16px;
border-top: 1px solid var(--Gray2, #E3E5E7);
border-bottom: 1px solid var(--Gray2, #E3E5E7);
`

const StyledAddButton = styled.div`
color: #FF6464;
font-family: "Pretendard Variable";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-top: 2px;
`

const StyledButtonWrap = styled.div`
display: flex;
gap: 8px;
`

const StyledInput =  styled.input`
border: none;
&:focus {
        border: none;
        outline: none
    }

&[readonly] {
background-color: #fffff;
}

`