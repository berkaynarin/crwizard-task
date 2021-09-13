import React from 'react'

export const Balance = (props) => {
    return (
        <div>
           <h4>Your Balance</h4>
           <h1>{props.balance}</h1> 
        </div>
    )
}
