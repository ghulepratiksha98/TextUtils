import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=> {
               setAlert({
                 msg: message,
                 type : type
               })
               setTimeout(() => {
                setAlert(null);
            }, 1500);
               
  }
  
  const toggleMOde =  ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled" , "success");
      // document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      showAlert("Light mode has been enabled" , "success");
      // document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      <Router>
      {/* <Navbar title="TextUtils" aboutText = "About TextUtils"></Navbar> */}
      <Navbar title="TextUtils" mode={mode} toggleMode ={toggleMOde}></Navbar>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route  exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route  exact path="/">
          <TextForm showAlert= {showAlert} heading = "Enter the text to analyze below" mode={mode}/>
          </Route>
         
        </Switch>
       
        
      </div>
      </Router>
    </>
  );
}

export default App;
