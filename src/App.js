import React from "react";
import TopBar from "./components/TopBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import HomeScreen from "./components/Homescrean/HomeScreen";
import Navbar2 from "./components/Navbar2";
import login from "./Registration/login";
import { Register } from "./Registration/Register";
function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <br/>
      <br/>
      <br/>
      <br/>
       <Navbar2/>
      <br/>
     <Switch>
         
        <Route path="/Register" component={Register} exact />
        {/* <Route path="/cart" component={cart} exact /> */}
        <Route path="/login" component={login} exact />
        <Route path="/Services" component={Services} exact />
        <Route path="/about" component={About} exact />
        <Route path="/Contact" component={Contact} exact />
        <Route path="/" component={HomeScreen} exact />
         

      </Switch> 
    </BrowserRouter>
  );
}

export default App;
