import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Form from "./components/Form";
import { Route,Link, Switch } from "react-router-dom";


function App() {
  
  return(
    <div>
      <nav>
        <h1 className='store-header'>Bloomtech&apos;s Cafeteria</h1>
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/help">Help</Link>
        </div>
      </nav>
      <Switch>
      <Route path={"/order-form"}>
        <Form/>
      </Route>  
      <Route path="/">
        <Header/>
      </Route>
    </Switch>
    </div>
  )
}

export default App;
