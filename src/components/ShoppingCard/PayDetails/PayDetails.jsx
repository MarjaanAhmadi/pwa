import React from 'react';
import {makeStyles} from '@material-ui/styles';
const useStyles = makeStyles({
    root : {
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: 5,
        padding: "5px 10px",
        textAlign: 'center'
    },
    payRow: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 2
    },
    title: {
        fontSize: 15,
        fontWeight: 600
    },
    weight: {
        fontSize: 12,
        color: '#9A9A9A',
        fontWeight: 600
      },
      title: {
        fontSize: 16,
        fontWeight: 600

    },
      weightOff: {
        fontSize: 13,
        fontWeight: 600,
        color: '#36CE91'
      },
      weightBenefit: {
        fontSize: 13,
        fontWeight: 600,
        color: '#2C7BE5'
      },
})
const PayDetails = ()=>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <span className={classes.title}>جزییات پرداخت</span>
            <div className={classes.payRow}>
                <span className={classes.weight} >تعداد اقلام</span>
                <span className={classes.weight} >3 عدد</span>
            </div>
            <div className={classes.payRow}>
                <span className={classes.weight} >جمع کل قبل از تخفیف</span>
                <span className={classes.weight} >45000 تومان</span>
            </div>
            <div className={classes.payRow}>
                <span className={classes.weightBenefit} >سود شما</span>
                <span className={classes.weightBenefit} >5000 تومان</span>
            </div>
            <div className={classes.payRow}>
                <span className={classes.weightOff} >مبلغ قابل پرداخت</span>
                <span className={classes.weightOff} >40000 تومان</span>
            </div>
        </div>
    )
}
export default PayDetails;