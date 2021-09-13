import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Container } from "@material-ui/core";
import { ExpenseIncome } from "./components/ExpenseIncome";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import './App.css';

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Balance />
        <ExpenseIncome />
        <TransactionList />
        <AddTransaction />
      </Container>
    </div>
  );
}

export default App;
