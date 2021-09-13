import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Container } from "@material-ui/core";
import { ExpenseIncome } from "./components/ExpenseIncome";
import { AddTransaction } from "./components/AddTransaction";
import './App.css';
import '@fontsource/roboto';

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Balance />
        <ExpenseIncome />
        <AddTransaction />
      </Container>
    </div>
  );
}

export default App;
