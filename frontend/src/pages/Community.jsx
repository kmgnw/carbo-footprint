import Header from "../entities/Community/ui/Header"
import RoomList from "../entities/Community/ui/RoomList"
import { useNavigate } from "react-router-dom";
import { isLogin } from "../shared/function/isLogin";
import { useEffect } from "react";

function Community(){

    return(
        <>
        <Header />
        <RoomList />
        </>
    )
}

export default Community