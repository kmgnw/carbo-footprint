import styled from "styled-components"
import backButton from '../../../assets/BackButton.svg'
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate()

    function handleBackButtonClick() {
        navigate(-1)
    }

    return (
        <MainLayout>

            <img
                onClick={handleBackButtonClick}
                src={backButton} 
                alt="back"
                fetchPriority="high"/>

            <Title>마이페이지</Title>

            <img
                style={{ visibility: 'hidden' }}
                src={backButton} 
                alt="back"
                fetchPriority="high"/>

        </MainLayout>
    )
}
export default Header;

const MainLayout = styled.div`
width: 100%;
padding: 1rem 2rem;
display: flex;
justify-content: space-between;
align-items: center
`

const Title = styled.div`
color: #262829;
text-align: center;
font-family: "Noto Sans KR";
font-size: 1.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`