import React, { useState } from 'react';
import "./Card.css"
import Button from "../Button/Button";

export default function Card(props) {
    const { text, value} = props;
    return(
        <div className='card'>
            <span className='cardText'>
                <span>{text}: </span> 
                <span className={text === "Expenses" ? "cardTextRed" : "cardTextGreen"}>
                    ₹{value}
                </span>
            </span>
            <Button 
                text={text === "Expenses" ? "+ Add Expense" : "+ Add Income"}
                background={text === "Expenses" ? "gradientRed" : "gradientGreen"}
                buttonSize = "largeButton"
            />
        </div>
    );
}