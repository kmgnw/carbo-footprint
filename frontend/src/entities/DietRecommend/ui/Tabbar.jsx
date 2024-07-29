import styled from "styled-components"

import Tab from "./Tab"
import { useState } from "react";

function Tabbar({ tab, setTab }){
    
    const tabs = ['알레르기', '식습관']

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
cursor: pointer;
`