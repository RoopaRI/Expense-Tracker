import React from "react";
import LogoImage from "../../assests/icon.png";
import "./Logo.css"

export default function Logo(){
    return(
        <img className="logo" src={LogoImage} alt="logo"/>
    );
}