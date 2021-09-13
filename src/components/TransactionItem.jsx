import React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, Input, Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

export const TransactionItem = (props) => {
    return (
            <Card>
                <CardContent>
                    <Typography>
                        <h3>{props.name}</h3>
                    </Typography>
                    <Typography>
                    <h4 className={props.class}>{props.amount}</h4>
                    </Typography>
                </CardContent>
            </Card>
    )
}
