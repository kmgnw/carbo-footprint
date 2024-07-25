import Header from "../entities/CarbCounting/ui/Header";
import Banner from "../entities/CarbCounting/ui/Banner";
import MainContent from "../entities/CarbCounting/ui/MainContent";
import Footer from "../shared/components/Footer/Footer";

function CarbCounting(){
    return(
    <>
        <Header/>
        <Banner/>
        <MainContent/>
        <Footer/>
    </>
    )
}

export default CarbCounting;