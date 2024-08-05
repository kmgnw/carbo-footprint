import styled from "styled-components"
import backButton from '../../../assets/BackButton.svg'
import exit from '../../../assets/Exit.svg'
import { useNavigate } from "react-router-dom"
import { RoomState, crntClickedRoomIdState } from "../../../shared/state/Community"
import { useRecoilValue } from "recoil"

function Header({exitRoom}) {
    const rooms = useRecoilValue(RoomState)
    const crntClickedRoomId = useRecoilValue(crntClickedRoomIdState)

    const navigate = useNavigate()

    function handleExitClick(){
        exitRoom()
        navigate('/mypage')
    }

    function findName(){
        const room = rooms.find(room => room.room_id === crntClickedRoomId);
        return room.room_name
    }

    return (
        <MainLayout>
            <img
                src={backButton}
                onClick={() => navigate(-1)}
                style={{cursor:"pointer"}}
                alt="back"
                fetchPriority="high"
            />

            <Title>{findName()}</Title>

            <img
            onClick={handleExitClick}
            src={exit} 
            alt="exit"
            fetchPriority="high"/>
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