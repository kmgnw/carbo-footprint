import styled from "styled-components";
import randomImage from '../../../assets/randomImage.png'
import { newScheduleState } from "../../../shared/state/AddSchedule";
import { useRecoilState } from "recoil";

function TitleSection(){

    const [newSchedule, setNewSchedule] = useRecoilState(newScheduleState)

    function inputChangeHandler(e) {
        setNewSchedule((prev) => ({
            ...prev,
            title: e.target.value
        }));
        console.log(newSchedule)
    }
    
    return(
        <MainLayout>

            <TitleWrap>
                <img style={{width: '32px'}}src={randomImage} />
                <Title>일정제목</Title>
            </TitleWrap>

            <InputWrap>
                <Input
                placeholder="일정 제목을 입력해주세요."
                onChange={(e)=>inputChangeHandler(e)}
                />
            </InputWrap>

        </MainLayout>
    )
}
export default TitleSection;

const MainLayout = styled.div`
display: flex;
flex-direction: column;
width: 100%;
padding: 2.4rem 2rem 2.4rem 2rem
`

const TitleWrap = styled.div`
display: flex;
gap: 0.9rem;
align-items: center;
margin-bottom: 0.8rem
`

const Title = styled.div`
color: #000;
font-family: "Pretendard Variable";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const InputWrap = styled.div`
width: 100%;
height: 4.8rem;
padding: 1.4rem 1.8rem;
border-radius: 8px;
border: 1px solid #D9D9D9;
margin-bottom: 1.4rem
`

const Input = styled.input`
border: none;
outline: none;
width:100%;
height: 100%;
color: black;
font-family: "Noto Sans KR";
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
&::placeholder{
    color: #D9D9D9;
    font-family: "Noto Sans KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
`