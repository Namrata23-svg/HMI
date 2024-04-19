
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

import MyComponent from './pages/changing';

import HMI from './pages/HMI';
import Automated from './Redirecting/Automated';
import MyPage from './Redirecting/MyPage';
import MyClass from './Redirecting/MyClass';
import ThirdPage from './Redirecting/ThirdPage';
import Login from './pages/Login';





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
          <Route path="/" element={<Home/>} />
      
      </Routes>
      </Router>
    </>
  );
}

export default App;
