import styled from 'styled-components';
import { hoverGrow } from '../../../shared/animation/hoverGrow';

function GNBCell({ title, img, onClick }){
    return(
        <MainLayout onClick={onClick}>
            <StyledIcon src={img} />
            <StyledTitle>{title}</StyledTitle>
        </MainLayout>
    )
}

export default GNBCell;

const MainLayout = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
cursor: pointer;
${hoverGrow}
`

const StyledIcon = styled.img`
display: block;
width: 40px;
height: 40px;
margin-bottom: 8px;
`

const StyledTitle = styled.div`
color: #000;
text-align: center;
font-family: "Pretendard Variable";
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
`