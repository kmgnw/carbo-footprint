import Header from '../entities/AddSchedule/ui/Header'
import TitleSection from '../entities/AddSchedule/ui/TitleSection'
import HeadingTitle from '../entities/AddSchedule/ui/HeadingTitle'
import DietLog from '../entities/AddSchedule/ui/DietLog'
import InputCalorie from '../entities/AddSchedule/ui/InputCalorie'
import ActivityLog from '../entities/AddSchedule/ui/ActivityLog'
import { isLogin } from "../shared/function/isLogin";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'

function AddSchedule(){

    const navigate = useNavigate()

    useEffect(() => {
        if (!isLogin()) {
            navigate('/login');
        }
    }, [navigate]); 

    return(
    <>
    <Header />
    <TitleSection />
    <HeadingTitle />
    <DietLog />
    <InputCalorie />
    <ActivityLog />
    </>
    )
}

export default AddSchedule;