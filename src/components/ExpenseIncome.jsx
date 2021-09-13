import React from 'react'
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';

export const ExpenseIncome = (props) => {
    return (
        <div>
            <Grid container >
                <Grid item xs={6}>
                    <Paper>
                        <h4>Income</h4>
                        <p>+${props.income}</p>
                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <Paper>
                        <h4>Expense</h4>
                        <p>-${props.expense}</p>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
