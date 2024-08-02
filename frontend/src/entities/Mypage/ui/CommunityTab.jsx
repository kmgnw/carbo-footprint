import styled from "styled-components"
import CommunityCell from './CommunityCell'
import NoData from "./NoData"
import { fetchMyCommunity } from "../api/api"
import { useEffect, useState } from "react"
import { RoomState } from "../../../shared/state/Community"
import { useRecoilState } from "recoil"

function CommunityTab() {

    const [myCommunity, setMyCommunity] = useState([])
    const [_, setRooms] = useRecoilState(RoomState)

    useEffect(() => {
        fetchMyCommunity(setMyCommunity, setRooms)
    }, [])

    return (
        <MainLayout>
            {true ? (
                myCommunity.map((e,i)=>(
                    <CommunityCell 
                    key={i}
                    room_name={e.room_name}
                    room_max_capacity={e.room_max_capacity}
                    room_current_capacity={e.room_current_capacity}
                    unchecked_message_count={e.unchecked_message_count}
                    room_id={e.room_id}
                    />
                ))
                    
                
            ) : <NoData />}
        </MainLayout>
    )
}

export default CommunityTab

const MainLayout = styled.div`
`