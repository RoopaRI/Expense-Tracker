import React from 'react';
import "./TransactionsBody.css"
import leftArrowIcon from "../../assests/leftArrow.svg";
import rightArrowIcon from "../../assests/rightArrow.svg";
import Button from '../Button/Button';

export default function PageNavigateBar(props){
    const {pages, updatePage} = props;
    return ( 
        <div className='TransactionBar PageNavigateBar'>
            <Button 
            icon={leftArrowIcon} 
            buttonSize="smallButton" 
            background={pages.currentPage === 1 ? "" : "shadow"} 
            clickFunction={()=> updatePage("left")}
            />
            <Button 
            text={pages.currentPage} 
            buttonSize="mediumButton" 
            background="backgroundDarkGreen" 
            />
            <Button 
            icon={rightArrowIcon} 
            buttonSize="smallButton" 
            background={pages.currentPage === pages.totalPages ? "" : "shadow"} 
            clickFunction={()=> updatePage("right")}
            />
        </div>
    );
};