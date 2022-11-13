import Home from "./home/Home";
import './app.scss';
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
    </>
  );
};

export default App;