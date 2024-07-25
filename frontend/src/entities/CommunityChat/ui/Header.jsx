import styled from "styled-components"
import backButton from '../../../assets/BackButton.svg'
import { useNavigate } from "react-router-dom"

function Header({ roomName }) {

    const navigate = useNavigate()

    return (
        <MainLayout>
            <img
                src={backButton}
                onClick={() => navigate(-1)}
            />

            <Title>roomName</Title>

            <img
                style={{ visibility: 'hidden' }}
                src={backButton} />
        </MainLayout>
    )
}

export default Header

const MainLayout = styled.div`
padding: 1rem 2rem;
display: flex;
justify-content: space-between;;
align-items: center;
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