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
    balance: 4300,
    expenses: 700
  })
  const [transactionData, setTransactionData] = useState(dummyData);
 
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
