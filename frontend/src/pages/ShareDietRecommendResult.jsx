import { fetchDiet } from "../entities/ShareDietRecommendResult/api/api"
import Header from "../entities/ShareDietRecommendResult/ui/Header"
import ResultMenu from "../entities/ShareDietRecommendResult/ui/ResultMenu"
import SelectedKeyword from "../entities/ShareDietRecommendResult/ui/SelectedKeyword"
import Footer from "../shared/components/Footer/Footer"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { shareRecommendedResultState } from "../shared/state/DietRecommendResult"
import { useRecoilState } from "recoil"

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function ShareDietRecommendResult(){

    const query = useQuery();
    const dietId = query.get("member_recommend_id");

    const [_, setShareRecommendedResult] = useRecoilState(shareRecommendedResultState)

    useEffect(()=>{
        fetchDiet(dietId, setShareRecommendedResult)
    }, [])

    return(
        <>
        <Header />
        <ResultMenu />
        <SelectedKeyword />
        <Footer />
        </>
    )
}
export default ShareDietRecommendResult