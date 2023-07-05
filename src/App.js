import Main from "./pages/main";
import Header from "./components/header";
import Information from "./pages/information";
import Rank from "./pages/rank";
import MyPage from "./pages/myPage";
import Result from "./pages/result";
import Choose from "./pages/choose";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/information" element={<Information />}></Route>
        <Route path="/rank" element={<Rank />}></Route>
        <Route path="/myPage" element={<MyPage />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/choose" element={<Choose />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
