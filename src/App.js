import { useEffect, useRef, useState } from "react";
import Logo from "./Components/Logo/Logo";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import AppHead from "./Components/AppHead/AppHead";
import AppBody from "./Components/AppBody/AppBody";
import { TransactionsContext, MoneyContext } from "./Contexts/AllContexts";
import { dummyData } from './dummyTransactions';



function App() {
  const [money, setMoney] = useState({
    balance: 5000,
    expenses: 0
  });
  const [transactionData, setTransactionData] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
 
  useEffect(() => {
    //Check localStorage
    const localBalance = localStorage.getItem("money");

    if (!localBalance) {
      // Set initial values if not present
      const initialMoney = { balance: 5000, expenses: 0 };
      setMoney(initialMoney);
      localStorage.setItem('money', JSON.stringify(initialMoney));
    } else {
      // Retrieve existing values
      setMoney(JSON.parse(localBalance));
      setIsMounted(true);
    }

    const items = JSON.parse(localStorage.getItem("expenses"));

    setTransactionData(items || []);
  }, []);

  // Update local storage when money values change
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('money', JSON.stringify(money));
    }
    
  }, [money]);

  // Update local storage when transaction data changes
  useEffect(() => {
    if (transactionData.length > 0 || isMounted) {
      localStorage.setItem('expenses', JSON.stringify(transactionData));
    }
    
  }, [transactionData]);

  return (
    <main className='App'>
      <MoneyContext.Provider value={[money, setMoney]}>
      <TransactionsContext.Provider value={[transactionData, setTransactionData]}>
        <Logo />
        <Navbar />
        <AppHead balance={money.balance} expenses={money.expenses}/>
        <AppBody transactionData={transactionData}/>
      </TransactionsContext.Provider> 
      </MoneyContext.Provider>
    </main>
  );
}

export default App;
