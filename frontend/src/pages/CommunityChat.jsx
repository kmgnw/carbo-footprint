import styled from "styled-components"
import Header from "../entities/CommunityChat/ui/Header"
import Chatting from "../entities/CommunityChat/ui/Chatting"

function CommunityChat() {
    return (
        <MainLayout>
            {/* <Header /> */}
            <Chatting />
        </MainLayout>
    )
}

export default CommunityChat

const MainLayout = styled.div`
`