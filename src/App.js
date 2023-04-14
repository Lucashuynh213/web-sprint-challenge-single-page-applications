import "./App.css";
import Homepage from "./components/Homepage"
import PizzaForm from "./components/Form"
import Confirmation from "./components/Confirmation";
import { useState } from "react";
import { Route,Link,Switch } from "react-router-dom";
import formSchema from "./components/formSchema"
import * as yup from "yup"
import axios from 'axios'
import "./Header.css"



function App() {

  const initialFormValues = {
    
    size: "",
    orginal:false,
    galic:false,
    bbq:false,
    spinach:false,
    pepperoni:false,
    sausage:false,
    bacon:false,
    italian: false,
    grilled:false ,
    green: false,
    mushroom:false ,
    diced:false ,
    black: false,
    roasted:false ,
    artichoke: false,
    three:false ,
    pineapple:false ,
    extra:false ,
    gulten:false ,
    instruction: ""
}

const initialFormError= {
    
  size: "",
  orginal:"",
  galic:"",
  bbq:"",
  spinach:"",
  pepperoni:"",
  sausage:"",
  bacon:"",
  italian:"",
  grilled:"",
  green:"",
  mushroom:"",
  diced:"" ,
  black:"",
  roasted:"" ,
  artichoke:"",
  three:"" ,
  pineapple:"",
  extra:"" ,
  gulten:"" ,
  instruction:""
}

const [formValues, setFormValues] = useState(initialFormValues);
const [formErrors,setFormErrors] = useState(initialFormError);
const [users, setUsers] = useState([]);

const handleSubmit = () => {
  axios.post('https://reqres.in/api/orders', formValues)
    .then(res=>{
      setUsers([res.data,...users])
    })
    .catch(err => console.error(err))
  
}

const validate = (name,value) => {
  yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
}

const handleChange = (name, value) => {
  validate(name, value);
  setFormValues({...formValues, [name] : value});
}

  return (
    <div>
    <nav className="nav">
        <h1 className="store-header">Bloomtech's Cafeteria</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/help">Help</Link>
            </li>
        </ul>
    </nav>

    <Switch>
      <Route path="/pizza">
        <PizzaForm 
        values={formValues}
        change={handleChange}
        errors={formErrors}
        submit={handleSubmit}
        />
      </Route>
      <Route path="/">
        <Homepage/>
      </Route>
      <Route path="/confirmation">
        <Confirmation/>
      </Route>
    </Switch>
    </div>
    )
}

export default App;
