
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {

    return (
      <div className='home-wrapper'>
        <img
          className='home-image'
          src='https://images6.alphacoders.com/698/698287.jpg'
          alt=''
        />
        <Link to="form-order"><button
          className='md-button shop-button'
        >
          Shop now!
        </button></Link>
      </div>
    )
  }
  

