import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Header from "../src/components/Header/Header";
import Starships from "../src/pages/starships/Starships";
import StarshipInfo from "../src/pages/StarshipInfo/StarshipInfo";
import PrivateRoute from "../src/components/PrivateRoute";
import Login from "../src/components/login/login";
import SignUp from "../src/components/login/signup";

function App() {

const [loged, setLoged] = useState(false);
const [popUpLogin, setPopUpLogin] = useState(false);
const [popUpSignUp, setPopUpSignUp] = useState(false);
const [users, setUsers] = useState([]); 
let textError = "";


const setLocalStorage = value => {
  try {
    setUsers(value)
    window.localStorage.setItem(users, JSON.stringify(value))
  } catch (error) {
    console.log(error)
  }
}

const userRegister = (data) => {
  setLocalStorage([...users, data])
  setPopUpSignUp(false)
}

const loginUser =(data) => {
  if(window.localStorage.getItem(data) !== undefined){
    setPopUpLogin(false)
    setLoged(true)
}else {
  alert("Incorrect email or password");
}
}

  return (
    <>
    <Header popUpLogin={() => setPopUpLogin(true)} popUpSignUp={() => setPopUpSignUp(true)}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/starships/" element={<PrivateRoute auth={loged}><Starships /></PrivateRoute>}/>
      <Route path="/starshipinfo/:id" element={<StarshipInfo />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
    {popUpLogin ? <Login handleLogin={loginUser} errorLogin={textError} close={() => setPopUpLogin(false)}/> : ""}
    {popUpSignUp ? <SignUp handleRegister={userRegister} close={() => setPopUpSignUp(false)}/> : ""}
    </>
  );
}

export default App;
