import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import facade from "./apiFacade";
import LogIn from "./components/loginform/LoginForm.jsx";
import LoggedIn from "./components/LoggedIn";
import Home from "./components/home/Home.jsx";
import Header from "./components/header/Header.jsx";
import About from "./components/about/About.jsx";


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({ username: "", roles: "" });



  return (
    <div>

      <Header loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} user = {user} setUser = {setUser}/>


      {/*<Home/>*/}
      {/*<About/>*/}

    </div>
  )
}

export default App;