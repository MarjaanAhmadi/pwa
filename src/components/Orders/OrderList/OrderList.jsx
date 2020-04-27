import React from 'react';
import SingleOrder from '../SingleOrder/SingleOrder';
import {makeStyles} from '@material-ui/styles';
const useStyles = makeStyles({
    root: {
        padding: "1px 0 5px 0"
    }
})
const OrderList = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <SingleOrder />
            <SingleOrder />
            <SingleOrder />
        </div>
    )
}
export default OrderList;