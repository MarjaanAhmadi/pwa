import React from 'react';
import {  makeStyles} from "@material-ui/styles";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Circle from '@material-ui/icons/RadioButtonUnchecked'
import Checkbox from '@material-ui/core/Checkbox';
import CheckCircle from '@material-ui/icons/CheckCircle';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: "0 5px"
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        color: 'grey',
        cursor: 'pointer'
    },
    actionIcos: {
        padding: '0 3px'
    },
    label: {
        margin: 0,
        fontSize: 14,
    },
    chooseAddress: {
        display: 'flex',
        justifyContent: 'start',
        flexDirection: 'row',
    },
    addressDetail: {
        marginTop: 2,
        color: '#9A9A9A',
        fontSize: 12,
        fontWeight: 600
    }
})
const SingleAddress = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.addressDetail}>
            <Checkbox color="primary" icon={<Circle />} checkedIcon={<CheckCircle />} name="checkedH" />
            <span>ستارخان، خیابان رحیمی اصل</span>
            </div>
            <div className ={classes.actions}>
            <EditIcon className={classes.actionIcos}/>
            <DeleteIcon className={classes.actionIcos}/>
            </div>
        </div>
    )
}
export default SingleAddress;