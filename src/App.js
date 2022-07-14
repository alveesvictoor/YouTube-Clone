import {React} from "react";
import Container from "./style";
import {
  Routes,
  Route,
} from "react-router-dom";
//Routes
import Home from "./Routes/Home";
import Explore from "./Routes/Explore";
import Subscriptions from "./Routes/Subscriptions";
import Library from "./Routes/Library"
import Downloads from "./Routes/Downloads";
 
//Components
import Header from "./Components/Header";
import MenuDrawerClose from "./Components/MenuDrawerClose";
import MenuDrawerOpen from "./Components/MenuDrawerOpen";



function App() {
  return (
   <Container>
     <Header/>
     <MenuDrawerClose/>
     <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="feed/explore" element={<Explore />} />
        <Route path="/feed/subscriptions" element={<Subscriptions />} />
        <Route path="/feed/library" element={<Library />} />
        <Route path="/feed/downloads" element={<Downloads />} />
      
    </Routes>
   </Container>
  );
}

export default App;
