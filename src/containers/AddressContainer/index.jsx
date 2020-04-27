import React from 'react';
import AddressList from '../../components/Address/AddressList/AddressList';
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import PinDropIcon from '@material-ui/icons/PinDrop';
import AddCircleIcon from '@material-ui/icons/AddCircleOutline';
import SingleAddress from "../../components/Address/SingleAddress/SingleAddress";
import {  makeStyles} from "@material-ui/styles";
const useStyles = makeStyles({
    root: {
        paddingTop: 10
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    locIcon: {
        color: '#2C7BE5',
        fontSize: 40
    },
    plusIcon: {
        color: '#2C7BE5',
        fontSize: 25,
        marginTop: 10
    },
    titleText: {
        fontSize: 15,
        fontWeight: 700,
        padding: 20
    },
    newAddress: {
        display: 'flex',
        justifyContent: 'start',
        flexDirection: 'row',
        cursor: 'pointer',
        marginRight: 13
    },
    newAddressTitle: {
        color: '#2C7BE5',
        fontSize: 13,
        marginTop: 10,
        padding: 2,
        fontFamily: 'IranSans',
        marginRight: 5
    }
})
const AddressContainer = () => {
    const classes = useStyles();
    const history = useHistory();
    return(
        <div className={classes.root}>
            <div className={classes.title}>
                <PinDropIcon className={classes.locIcon}/>
                <span className={classes.titleText}>آدرس تحویل سفارش خود را انتخاب نمایید</span>
            </div>
            <SingleAddress/>
            <div className={classes.newAddress}>
            <AddCircleIcon className={classes.plusIcon} />
            <Button className={classes.newAddressTitle} onClick={() => {history.push('/createaddress')}}>آدرس جدید</Button>
        
            </div>
        </div>
    )
}
export default AddressContainer;