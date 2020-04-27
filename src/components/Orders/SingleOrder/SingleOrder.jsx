import React from 'react';
import {Card, CardContent, Divider } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
const useSTyles = makeStyles({
    root: {
        marginTop: 6,
        backgroundColor: 'white',
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    content: {
        width: '100%',
        flexDirection: 'column',
        padding: '0 5px',
        justifyContent: 'space-between',
        display: 'flex',
        paddingBottom: '10px !important'
    },
    details: {
        backgroundColor: '#F5F5F5',
        borderRadius: 15,
        padding: 5,
    },
    rowDetail: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: "5px 3px"
    },
    headerDetails: {
        fontSize: 13,
        color: '#9A9A9A',
        width: '33.3%',
        fontWeight: 600,
        padding: "5px 3px"
    },
    ttile: {
        fontSize: 13,
        color: '#9A9A9A',
        fontWeight: 600,
        padding: "10px 5px"

    },
    value: {
        fontSize: 14,
        color: '#0B0B0B'
    },
    statusValue: {
        color: '#F7931D',
        fontSize: 14
    },
    detailsText: {
        fontSize: 13,
        width: '33.3%'
    },
    price: {
        fontSize: 15,
        color: '#36CE91',
        fontWeight: 600,
        padding: "10px 5px"
    },
})
const SingleOrder = () => {
    const classes = useSTyles();
    return(
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <div className={classes.rowDetail}>
                <span className={classes.ttile}>تاریخ <span className={classes.value}>شنبه 12 فروردین</span></span>
                <span className={classes.ttile}> کد سفارش <span className={classes.value}>123</span></span>
                
                </div>
                <Divider variant="light"/>
                <span className={classes.headerDetails}>جزییات سفارش</span>
                <div className={classes.details}>
                    <div className={classes.rowDetail}>
                        <span className={classes.headerDetails}>کالا</span>
                        <span className={classes.headerDetails}>تعداد</span>
                        <span className={classes.headerDetails}>قیمت کل</span>
                    </div>
                    <div className={classes.rowDetail}>
                        <span className={classes.detailsText}>ماست</span>
                        <span className={classes.detailsText}>2</span>
                        <span className={classes.detailsText}>120000 تومان</span>
                    </div>
                    <div className={classes.rowDetail}>
                        <span  className={classes.detailsText} > ماست ماست</span>
                        <span  className={classes.detailsText}>12</span>
                        <span  className={classes.detailsText}>12000 تومان</span>
                    </div>
                </div>
                <span className={classes.price}>مبلغ 18000 تومان</span>
                <Divider variant="light"/>
                <span className={classes.ttile}>وضعیت سفارش <span className={classes.statusValue}>در حال آماده سازی</span></span>
                <Divider variant="light"/>
                <span className={classes.ttile}>نوع پرداخت <span className={classes.value}>کیف پول</span></span>

            </CardContent>
        </Card>
    )
}
export default SingleOrder;