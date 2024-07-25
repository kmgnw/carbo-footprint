import styled from "styled-components"

import Tab from "./Tab"
import { useState } from "react";

function Tabbar({ tab, setTab }){
    
    const tabs = ['식단추천', '탄수 카운팅', '중독테스트', '커뮤니티']

    return (
    <MainLayout>
        {tabs.map((e, i)=>(
            <Tab
            title={e}
            index={i}
            tab={tab}
            setTab={setTab}
            />
        ))}
    </MainLayout>        
    )
}
export default Tabbar

const MainLayout = styled.div`
display: flex;
`