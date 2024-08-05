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
import Login from "./pages/Login";
import Register from "./pages/Register";
import ShareDietRecommendResult from "./pages/ShareDietRecommendResult";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="add-schedule" element={<AddSchedule />} />
      <Route path="carb-counting" element={<CarbCounting/>} />
      <Route path="carb-counting-result" element={<CarbCountingResult/>}/>
      <Route path="diet-recommend" element={<DietRecommend/>} />
      <Route path="diet-recommend-result" element={<DietRecommendResult/>} />
      <Route path="diet-recommend-result-share" element={<ShareDietRecommendResult/>} />
      <Route path="mypage" element={<Mypage/>} />
      <Route path="carb-test" element={<CarbTest/>}/>
      <Route path="carb-test-result">
        <Route path=":step" element={<CarbTestResult />} />
      </Route>
      <Route path="chatbot" element={<Chatbot/>}/>
      <Route path="community" element={<Community/>}/>
      <Route path="community-chat" element={<CommunityChat/>}/>
      <Route path="contributor" element={<Contributor />}/>
      <Route path="login" element={<Login />}/>
      <Route path="register" element={<Register />}/>
    </Routes>
  );
}

export default App;
