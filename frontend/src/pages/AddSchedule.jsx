import Header from '../entities/AddSchedule/ui/Header'
import TitleSection from '../entities/AddSchedule/ui/TitleSection'
import HeadingTitle from '../entities/AddSchedule/ui/HeadingTitle'
import DietLog from '../entities/AddSchedule/ui/DietLog'
import InputCalorie from '../entities/AddSchedule/ui/InputCalorie'
import ActivityLog from '../entities/AddSchedule/ui/ActivityLog'

function AddSchedule(){
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