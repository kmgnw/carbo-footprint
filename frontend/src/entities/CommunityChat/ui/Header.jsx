import styled from "styled-components"
import backButton from '../../../assets/BackButton.svg'
import exit from '../../../assets/Exit.svg'
import { useNavigate } from "react-router-dom"
import { RoomState, crntClickedRoomIdState } from "../../../shared/state/Community"
import { useRecoilValue } from "recoil"

function Header() {
    const rooms = useRecoilValue(RoomState)
    const crntClickedRoomId = useRecoilValue(crntClickedRoomIdState)

    const navigate = useNavigate()

    function handleExitClick(){
        navigate('/community')
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
            />

            <Title>{findName()}</Title>

            <img
            onClick={handleExitClick}
            src={exit} />
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