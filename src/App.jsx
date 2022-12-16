import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import './app.scss';
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login"
import Detail from "./pages/detail/Detail";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Search from "./pages/search/Search";
import Profile from "./pages/profile/Profile";
import PublicProfile from "./pages/publicProfile/PublicProfile";
import CurrentUser from "./components/current-user/CurrentUser";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <CurrentUser >
        <Routes>
          
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/detail/:imdbID" element={<Detail/>}></Route>
            <Route path="/watch" element={<Watch/>}></Route>
            <Route path="/pageNotFound" element={<PageNotFound/>}></Route>
            <Route path="/search" element={<Search/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/profile/:uid" element={<PublicProfile/>}/>
          
        </Routes>
        </CurrentUser>
      </BrowserRouter>
    </>
  );
};

export default App;