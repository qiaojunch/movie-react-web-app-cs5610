import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import './app.scss';
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login"
import Detail from "./pages/detail/Detail";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Search from "./pages/search/Search";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/detail/:imdbID" element={<Detail/>}></Route>
          <Route path="/watch" element={<Watch/>}></Route>
          <Route path="/pageNotFound" element={<PageNotFound/>}></Route>
          <Route path="/search" element={<Search/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;