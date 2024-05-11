import React from 'react';
import "./AppBody.css";
import Transactions from '../Transactions/Transactions';
import TopExpenses from '../TopExpenses/TopExpenses';

export default function AppBody() {
    return (
        <div className='AppBody'>
            <Transactions />
            <TopExpenses />
        </div>
    );
};