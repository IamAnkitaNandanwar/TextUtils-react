import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-dark');
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mood has been enabled", "success");
      document.title = "TextUtils - light Mode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mood has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/testForm">
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            </Route>
          </Switch>
          {/* <TextForm showAlert= {showAlert} heading="Enter the text to analyze below" mode = {mode}/>  */}
          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
