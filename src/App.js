import Main from "./pages/main";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Choose from "./pages/choose";
import MyPage from "./pages/myPage";
import Rank from "./pages/rank";
import Infomation from "./pages/information";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/choose" element={<Choose />}></Route>
        <Route path="/result" element={<MyPage />}></Route>
        <Route path="/rank" element={<Rank />}></Route>
        <Route path="/myPage" element={<MyPage />}></Route>
        <Route path="/information" element={<Infomation />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
