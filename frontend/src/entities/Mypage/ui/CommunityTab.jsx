import styled from "styled-components"
import CommunityCell from './CommunityCell'
import NoData from "./NoData"

function CommunityTab(){
    return(
        <MainLayout>
            {true ? (
                <>
                    <CommunityCell />
                </>
            ) : <NoData />}
        </MainLayout>
    )
}

export default CommunityTab

const MainLayout = styled.div`
`