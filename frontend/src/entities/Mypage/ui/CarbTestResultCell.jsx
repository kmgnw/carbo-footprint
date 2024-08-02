import { useEffect, useState } from "react"
import styled from "styled-components"
import 양호 from '../../../assets/lv1.svg'
import 주의 from '../../../assets/lv2.svg'
import 위험 from '../../../assets/lv3.svg'
import 중독 from '../../../assets/lv4.svg'

function CarbTestResultCell({type, date, check_count}){

    const [cellInfo, setCellInfo] = useState({})

    useEffect(()=>{
        switch (type) {
            case '양호':
                setCellInfo({
                    date: date,
                    img: 양호,
                    result: '양호',
                    checkCount: check_count
                })
                break;

            case '주의':
                setCellInfo({
                    date: date,
                    img: 주의, 
                    checkCount: check_count,
                    result: '주의'
                })
                break;

            case '위험':
                setCellInfo({
                    date: date,
                    img: 위험,
                    checkCount: check_count,
                    result: '위험'
                })
                break;

            case '중독':
                setCellInfo({
                    date: '',
                    img: 중독,
                    checkCount: check_count,
                    result: '중독'
                })
                break;
        
            default:
                break;
        }
    }, [type])


    return(
        <MainLayout>

            <DateWrap>
                cellInfo.date
            </DateWrap>

            <ImgWrap>
                <Img src={cellInfo.img} alt={cellInfo.result} />
            </ImgWrap>

            <CheckCount>{cellInfo.checkCount}개 체크</CheckCount>

            <Result>{cellInfo.result}</Result>
        </MainLayout>
    )
}

export default CarbTestResultCell

const MainLayout = styled.div`
padding: 1.6rem;
display: flex;
flex-direction: column;
gap: 0.8rem;
background-color: #F2F3F5;
border-radius: 0.8rem;
background: var(--Gray1, #F2F3F5);
box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.20);
`

const DateWrap = styled.div`
color: #FFF;
font-family: "Noto Sans KR";
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
padding: 0.8rem 1.35rem;
border-radius: 2rem;
background: #BABEC0;
`

const CheckCount = styled.div`
color: #7D7F82;
font-family: "Noto Sans KR";
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`

const Result = styled.div`
color: #262829;
font-family: "Noto Sans KR";
font-size: 1.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const ImgWrap = styled.div`
  width: 100%;
  height: 9.4rem;
  object-fit: contain;
`

const Img = styled.img`
width: 100%;
height: 9.4rem;
`