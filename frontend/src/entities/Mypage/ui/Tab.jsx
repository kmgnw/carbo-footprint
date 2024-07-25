import styled from "styled-components";
import { useRecoilState } from "recoil";

function Tab({title, index, tab, setTab}){

    function handleTab(){
        setTab(index)
    }

    return(
    <Container onClick={handleTab} active={tab===index}>
        <TitleArea active={tab===index}>{title}</TitleArea>
    </Container>
    )
}
export default Tab;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
border-bottom: ${({ active }) => (active ? `2px solid black` : '2px solid #E3E5E7')};
padding: 1.1rem 0 1.1rem 0
`

const TitleArea = styled.div`
display: flex;
color: ${({active})=>(active ? `black` : '#E3E5E7')};
color: ${({active})=>(active ? `black` : '#E3E5E7')};
text-align: center;
font-family: "Pretendard Variable";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`