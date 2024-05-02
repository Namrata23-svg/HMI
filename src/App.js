
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

import MyComponent from './pages/changing';
import Evoco from "./Redirecting/Evoco"
import HMI from './pages/HMI';
import Automated from './Redirecting/Automated';
import MyPage from './Redirecting/MyPage';
import MyClass from './Redirecting/MyClass';
import ThirdPage from './Redirecting/ThirdPage';
import Login from './pages/Login';
import Mypdf from './pages/Mypdf';
import HmiAcc from './Redirecting/HmiAcc';
import SearchPage from './pages/SearchPage';
import Ridebuddy from './Redirecting/Ridebuddy';
import Hmianalytics from './Redirecting/Hmianalytics';
import HmiVis from './Redirecting/HmiVisualization';
import Mahindra from './Redirecting/Mahindra';





function App() {
  return (
    < >
      <Router>
      
      <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
        
          <Route path="/MyComponent" element={<MyComponent/>} />
          <Route path="/HMI" element={<HMI/>} />
          <Route path="/automated" element={<Automated/>} />
          <Route path="/mypage" element={<MyPage/>} />
          <Route path="/secondpage" element={<MyClass/>} />
          <Route path="/thirdpage" element={<ThirdPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/leapx" element={<Mypdf/>} />
          <Route path="/HmiAcc" element={<HmiAcc/>}/>
          <Route path="/SearchPage" element={<SearchPage/>}/>
          <Route path="/leapx" element={<Evoco/>}/>
          <Route path="/ridebuddy" element={<Ridebuddy/>}/>
          <Route path="/hmianalytics" element={<Hmianalytics/>}/>
          <Route path="/hmivisualization" element={<HmiVis/>}/>
          <Route path="/Mahindra" element={<Mahindra/>}/>
          <Route path="/" element={<Home/>} />
      
      </Routes>
      </Router>
    </>
  );
}

export default App;
