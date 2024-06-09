import { Component, useState } from "react";
import Headers from "./Component/Headers"
import Cards from "./Component/Cards"
import Todos from "./Component/Todos";
import Footer from "./Component/Footer";
import Add from "./Component/Add";

function App() {

  const pageStyle = {
    backgroundColor: 'gray', // Set your desired background color
    height: '100vh',
    margin: 0,
    padding: 0};

  
  
  
  
  return (
    <>
    <Headers title = "To Do List" /> 
    <Todos />
    <Footer />
    
    


        
    </>
  );
}

export default App;