import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LogIn from "./components/LogIn/LogIn";
import Blog from "./components/Blog/Blog";
import Chat from "./components/Chat/Chat";
import Contact from "./components/Contact/Contact";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact component={LandingPage} />
        <Route path="/Login" component={LogIn} />
        <Route path="/blog" component={Blog} />
        <Route path="/chat" component={Chat} />
        <Route path="/contact" component={Contact} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
