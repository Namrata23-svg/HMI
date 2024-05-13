import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import MyComponent from "./pages/changing";
import Evoco from "./Redirecting/Evoco";
import HMI from "./pages/HMI";
import Automated from "./Redirecting/Automated";
import MyPage from "./Redirecting/MyPage";
import MyClass from "./Redirecting/MyClass";
import ThirdPage from "./Redirecting/ThirdPage";
import Login from "./pages/Login";
import Mypdf from "./pages/Mypdf";
import HmiAcc from "./Redirecting/HmiAcc";
import SearchPage from "./pages/SearchPage";
import Ridebuddy from "./Redirecting/HMISoftwareProducts";
import Hmianalytics from "./Redirecting/Hmianalytics";
import HmiVis from "./Redirecting/HmiVisualization";
import Mahindra from "./Redirecting/Mahindra";
import LeapX from "./Redirecting/leapx";
import VSolutions from "./Redirecting/V&v";
import HMISoftwareProducts from "./Redirecting/HMISoftwareProducts";
import deTranslation from "../src/pages/de.json"
import LanguageBar from "./pages/SearchBar";
function App() {
  i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
     
      de: {
        translation: deTranslation,
      },
    },
    fallbackLng: 'en',
    detection: {
      order: ['navigator'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

  return (
    <>
    <I18nextProvider i18n={i18n}>
    
      <Router>
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}

          <Route path="/MyComponent" element={<MyComponent />} />
          <Route path="/HMI" element={<HMI />} />
          <Route path="/automated" element={<Automated />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/secondpage" element={<MyClass />} />
          <Route path="/thirdpage" element={<ThirdPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/leapx" element={<LeapX />} />
          <Route path="/HmiAcc" element={<HmiAcc />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/evoco" element={<Evoco />} />
          <Route
            path="/HmiSoftwareProducts"
            element={<HMISoftwareProducts />}
          />
          <Route path="/hmianalytics" element={<Hmianalytics />} />
          <Route path="/HmiVisualization" element={<HmiVis />} />
          <Route path="/Mahindra" element={<Mahindra />} />
          <Route path="/VSolutions" element={<VSolutions />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
      </I18nextProvider>
    </>
  );
}

export default App;
