import styled from 'styled-components';
import CalendarCell from './CalendarCell';
import { useEffect, useState, useRef } from 'react';

import { augustState, septemberState } from '../../state/calendar';
import { useRecoilState, useRecoilValue } from 'recoil';
import { fetchSchedules } from '../../../entities/Main/api/api';

function Calendar() {

    const gridRef = useRef(null);

    const july = [[27], [28], [29], [30]]
    const [august, setAugust] = useRecoilState(augustState)
    const [september, setSeptember] = useRecoilState(septemberState)

    const [month, setMonth] = useState(8);
    const [day, setDay] = useState(0);

    const days = ["월", "화", "수", "목", "금", "토", "일"]
    
    function getDayofAugust(n){
        let remainder = n%7
        switch (remainder) {
            case 0:
                return days[3]

            case 1:
                return days[4]
                
            case 2:
                return days[5]
                
            case 3:
                return days[6]
                
            case 4:
                return days[0]

            case 5:
                return days[1]
        }
    }

    useEffect(() => {
        const today = new Date();
        setDay(today.getDate());
        fetchSchedules(setAugust, setSeptember)
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (gridRef.current) {
                const scrollTop = gridRef.current.scrollTop;
                const maxScrollTop = gridRef.current.scrollHeight - gridRef.current.clientHeight;

                if (scrollTop >= maxScrollTop / 2) {
                    setMonth(9);
                } else {
                    setMonth(8);
                }
            }
        };

        const gridLayout = gridRef.current;
        if (gridLayout) {
            gridLayout.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (gridLayout) {
                gridLayout.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <MainLayout>

            <Month>{month}월</Month>

            <StyledDays>
                {days.map((e) => (
                    <DayWrap>{e}</DayWrap>
                ))}
            </StyledDays>

            <StyledGrid ref={gridRef}>

                {july.map((e, index) => (
                    <SnappingEndPoint key={index}>
                        <CalendarCell month={month} schedule={[]} index={e[0]} today={day} day={getDayofAugust(index+1)}/>
                    </SnappingEndPoint>
                ))}

                {august.map((e, index) => (
                    <SnappingEndPoint key={index} >
                        <CalendarCell month={month} schedule={e} index={index} today={day-1} />
                    </SnappingEndPoint>
                ))}

                {september.map((e, index) => (
                    <SnappingStartPoint key={index} >
                        <CalendarCell month={month} schedule={e} index={index} today={-1} />
                    </SnappingStartPoint>
                ))}

            </StyledGrid>

        </MainLayout>
    );
}

export default Calendar;

const MainLayout = styled.div`
background-color: #f4f4f4;
scroll-snap-type: y mandatory;
-ms-overflow-style: none;
scrollbar-width: none;
&::-webkit-scrollbar {
    display: none;
}
`

const StyledDays = styled.div`
display: flex;
justify-content: space-evenly;
margin-bottom: 16px;
`

const Month = styled.div`
color: #000;
font-family: "Pretendard Variable";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 32px
`

const DayWrap = styled.div`
width: 100%;
display: flex;
justify-content: center;
color: #000;
text-align: center;
font-family: "Pretendard Variable";
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 4px;
  height: 408px;
  overflow: auto;
  scroll-snap-type: y mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
    }
`;

const SnappingStartPoint = styled.div`
scroll-snap-align: start;
`

const SnappingEndPoint = styled.div`
scroll-snap-align: end;
`