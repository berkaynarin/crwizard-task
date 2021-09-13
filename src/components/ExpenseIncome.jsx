import React from 'react'
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';

export const ExpenseIncome = () => {
    return (
        <div>
            <Grid container >
                <Grid item xs={6} spacing={2}>
                    <Paper>
                        <h4>Income</h4>
                        <p>+$0.00</p>
                    </Paper>
                </Grid>
                <Grid item xs={6} spacing={2}>
                    <Paper>
                        <h4>Expense</h4>
                        <p>-$0.00</p>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
