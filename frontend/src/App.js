import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import AddSchedule from "./pages/AddSchedule";
import CarbCounting from "./pages/CarbCounting";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="add-schedule" element={<AddSchedule />} />
      <Route path="carb-counting" element={<CarbCounting/>} />
    </Routes>
  );
}

export default App;
