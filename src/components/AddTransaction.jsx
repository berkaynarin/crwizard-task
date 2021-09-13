import React, {useState} from 'react';
import { FormControl, TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';


export const AddTransaction = () => {

    const [transName, setTransName] = useState(0);
    const [amount, setAmount] = useState("");

    return (
        <div>
            <FormControl>
                <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                <Input           
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                value={transName}
                onChange={(e) => setTransName(e.target.value)}
                />
        </FormControl>
        <FormControl>
        <InputLabel htmlFor="standard-adornment-amount">Transaction Name</InputLabel>
                <Input           
                placeholder="Water Bill"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                />
        </FormControl>
        </div>
    )
}
