
import About from "./compononts/About";
import Contact from "./compononts/Contact";
import Experience from "./compononts/Experance";
import Home from "./compononts/Home";
import Navbar  from "./compononts/Navbar";

import SocialLinks from "./compononts/SocialLinks";


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Experience/>
     <SocialLinks/>
     <Contact/>
    </div>
  );
}

export default App;
