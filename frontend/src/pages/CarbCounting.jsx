import Header from "../entities/CarbCounting/ui/Header";
import Banner from "../entities/CarbCounting/ui/Banner";
import MainContent from "../entities/CarbCounting/ui/MainContent";
import Footer from "../shared/components/Footer/Footer";
import Modal from "../entities/CarbCounting/ui/Modal";
import { useState } from "react";

function CarbCounting(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const openModalHandler = () => 
    {
        setIsModalOpen(true);
    }

    return(
    <div style={{position: "relative"}}>
        <Header/>
        <Banner/>
        <MainContent openModalHandler={openModalHandler}/>
        <Footer/>
        <Modal isOpen={isModalOpen}
        onClose={handleCloseModal} />
    </div>
    )
}

export default CarbCounting;