import Header from "../entities/CarbTest/ui/Header";
import RoutingComponent from "../entities/CarbTestResult/ui/RoutingComponent";
import ShareResult from "../entities/CarbTestResult/ui/ShareResult";
import TestResultMain from "../entities/CarbTestResult/ui/TestResultMain";
import Footer from "../shared/components/Footer/Footer";

export default function CarbTestResult(){
    return(
    <>
        <Header/>
        <TestResultMain/>
        <ShareResult/>
        <RoutingComponent/>
        <Footer/>

    </>);
}