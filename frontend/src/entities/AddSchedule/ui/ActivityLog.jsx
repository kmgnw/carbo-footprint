import styled from "styled-components";
import StandardInput from '../../../shared/components/StandardInput/StandardInput'
import StandardButton from '../../../shared/components/StandardButton/StandardButton'
import { newScheduleState } from '../../../shared/state/AddSchedule'
import { useRecoilState } from "recoil";
import activityLog from '../../../assets/ActivityLog.svg'
import { augustState, crntClickedDayState } from "../../../shared/state/calendar";
import { useNavigate } from "react-router-dom";

function ActivityLog() {

    const [newSchedule, setNewSchedule] = useRecoilState(newScheduleState)
    const [august, setAugust] = useRecoilState(augustState)
    const [crntClickedDay, setCrntClickedDay] = useRecoilState(crntClickedDayState)
    const navigate = useNavigate()

    function handleWorkoutTimeChange(value) {
        setNewSchedule((prev) => ({
            ...prev,
            workoutTime: value
        }));
    }

    function handleStepCountChange(value) {
        setNewSchedule((prev) => ({
            ...prev,
            stepCount: value
        }));
    }

    function handleSaveButtonClick() {

        if (newSchedule.title && newSchedule.title !== '') {
            setAugust((prev) => {
                const list = [...prev];
                if (list[crntClickedDay].length === 1 && list[crntClickedDay][0].title === '') {
                    list[crntClickedDay] = [newSchedule];
                    return list
                } else {
                    list[crntClickedDay] = [...list[crntClickedDay], newSchedule];
                    return list;
                }
            });

            navigate('/')
            setNewSchedule({
                firstMeal: [],
                secondMeal: [],
                thirdMeal: [],
                extraMeal: []
            })
        } else {
            window.alert('제목')
        }
    }



    return (
        <MainLayout>

            <TitleWrap>

                <img src={activityLog}
                    style={{
                        width: '3.2rem'
                    }}
                />

                <Title>
                    활동량 기록
                </Title>

            </TitleWrap>


            <InputWrap>
                <WorkoutTimeWrap>

                    <Text>운동 시간</Text>

                    <StandardInputWrap>

                        <StandardInput placeholder='운동 시간 입력' onChange={(e) => handleWorkoutTimeChange(e)} />

                        <InputTrailingText>분</InputTrailingText>

                    </StandardInputWrap>

                </WorkoutTimeWrap>

                <WorkoutTimeWrap>

                    <Text>걸음 수</Text>

                    <StandardInputWrap>

                        <StandardInput placeholder='걸음수 입력' onChange={(e) => handleStepCountChange(e)} />

                        <InputTrailingText>걸음</InputTrailingText>

                    </StandardInputWrap>

                </WorkoutTimeWrap>

            </InputWrap>

            <StandardButton title='저장하기' onClick={handleSaveButtonClick} />

            <div style={{ height: '1.1rem' }} />
        </MainLayout>
    )
}

export default ActivityLog;

const MainLayout = styled.div`
padding: 2rem 2rem 0 2rem;
`

const TitleWrap = styled.div`
display: flex;
align-items: center
`

const Title = styled.div`
color: #262829;
font-family: "Noto Sans KR";
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-left: 0.8rem;
`

const InputWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 1.8rem;
margin-bottom: 4rem;
gap: 2.2rem;
`

const WorkoutTimeWrap = styled.div`

`

const Text = styled.div`
color: #000;
font-family: "Noto Sans KR";
font-size: 1.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 0.4rem
`

const StandardInputWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 0.8rem
`

const InputTrailingText = styled.div`
color: #BABEC0;
font-family: "Noto Sans KR";
font-size: 1.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
white-space: nowrap;
`