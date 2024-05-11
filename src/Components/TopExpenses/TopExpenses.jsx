import React from 'react';
import "../Transactions/Transactions.css";
import TopExpenseBody from "./TopExpensesBody";

export default function TopExpenses() {
    return (
        <div className='Transactions'>
            <h2>Top Expenses</h2>
            <TopExpenseBody />
        </div>
    );
};
