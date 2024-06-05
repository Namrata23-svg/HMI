import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyComponent from "./pages/changing";
import Evoco from "./Redirecting/Evoco";
import HMI from "./pages/HMI";
import Login from "./pages/Login";
import HmiAcc from "./Redirecting/HmiAcc";
import SearchPage from "./pages/SearchPage";
import Hmianalytics from "./Redirecting/Hmianalytics";
import HmiVis from "./Redirecting/HmiVisualization";
import LeapX from "./Redirecting/leapx";
import VSolutions from "./Redirecting/V&v";
import HMISoftwareProducts from "./Redirecting/HMISoftwareProducts";
import Voicebiometry from "./Redirecting/Voicebiometry";
import Solutions from "./Redirecting/V&v";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/MyComponent" element={<MyComponent />} />
          <Route path="/HMI" element={<HMI />} />
          <Route path="/login" element={<Login />} />
          <Route path="/leapx" element={<LeapX />} />
          <Route path="/HmiAcc" element={<HmiAcc />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/voicebiometry" element={<Voicebiometry />} />
          <Route path="/V&V" element={<Solutions />} />
          <Route path="/evoco" element={<Evoco />} />
          <Route
            path="/HmiSoftwareProducts"
            element={<HMISoftwareProducts />}
          />
          <Route path="/hmianalytics" element={<Hmianalytics />} />
          <Route path="/HmiVisualization" element={<HmiVis />} />
          <Route path="/VSolutions" element={<VSolutions />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
