import React from 'react';
import "./Transactions.css";
import TransactionsBody from '../TransactionsBody/TransactionsBody';

export default function Transactions() {
    return (
        <div className='Transactions'>
            <h2>Recent Transactions</h2>
            <TransactionsBody />
        </div>
    );
};