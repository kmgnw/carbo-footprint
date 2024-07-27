import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import AddSchedule from "./pages/AddSchedule";
import CarbCounting from "./pages/CarbCounting";
import CarbCountingResult from "./pages/CarbCountingResult";
import DietRecommend from "./pages/DietRecommend";
import DietRecommendResult from "./pages/DietRecommendResult";
import Mypage from "./pages/Mypage";
import CarbTest from "./pages/CarbTest";
import CarbTestResult from "./pages/CarbTestResult";
import Chatbot from "./pages/Chatbot";
import Community from "./pages/Community";
import CommunityChat from "./pages/CommunityChat";
import Contributor from './pages/Contributor'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="add-schedule" element={<AddSchedule />} />
      <Route path="carb-counting" element={<CarbCounting/>} />
      <Route path="carb-counting-result" element={<CarbCountingResult/>}/>
      <Route path="diet-recommend" element={<DietRecommend/>} />
      <Route path="diet-recommend-result" element={<DietRecommendResult/>} />
      <Route path="mypage" element={<Mypage/>} />
      <Route path="carb-test" element={<CarbTest/>}/>
      <Route path="carb-test-result" element={<CarbTestResult/>}/>
      <Route path="chatbot" element={<Chatbot/>}/>
      <Route path="community" element={<Community/>}/>
      <Route path="community-chat" element={<CommunityChat/>}/>
      <Route path="contributor" element={<Contributor />}/>
    </Routes>
  );
}

export default App;
