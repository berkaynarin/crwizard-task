import React, {useState} from 'react';
import { FormControl} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import { TransactionItem } from './TransactionItem';
import Button from '@material-ui/core/Button';


export const AddTransaction = () => {

    const [transName, setTransName] = useState(" ");
    const [amount, setAmount] = useState("");
    const [item, setItem] = useState([]);

    function handleClick() {
        setItem(prevValue => {
            return [...prevValue, amount]
        })
    }
    return (
        <div>
        <h3>History</h3>
        <ul>
           {
              item.map(() => {
                  return <TransactionItem 
                    class={item.at(-1).includes("-") ? "redHeader" : "greenHeader"}
                    name={transName}
                    amount={amount}
                  />
              })      
            }
            </ul>
            <div>
                <FormControl>
                    <InputLabel >Transaction Name</InputLabel>
                    <Input           
                    value={transName}
                    onChange={(e) => setTransName(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                    <Input 
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}          
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    />
                </FormControl>
            </div>
           <Button onClick={handleClick} variant="contained" color="primary">Add Item</Button>
           
           
        </div>
    )
}
