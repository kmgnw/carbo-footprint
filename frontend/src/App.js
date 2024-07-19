import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import AddSchedule from "./pages/AddSchedule";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="add-schedule" element={<AddSchedule />} />
    </Routes>
  );
}

export default App;
