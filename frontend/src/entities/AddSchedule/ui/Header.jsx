import styled from "styled-components";
import BackButton from '../../../assets/BackButton.svg'
import { useNavigate } from "react-router-dom";

function Header (){

    const navigate = useNavigate()

    function handleBackButtonClick(){
        navigate(-1)
    }

    return(
        <MainLayout>
            <StyledBackButton
            src={BackButton}
            onClick={handleBackButtonClick}
            />
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

const StyledBackButton = styled.img`
width:3.6rem;
height:3.6rem;
`