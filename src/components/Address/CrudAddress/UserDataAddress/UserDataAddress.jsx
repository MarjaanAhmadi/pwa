import React from 'react';
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import PinDropIcon from '@material-ui/icons/PinDrop';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import {  makeStyles} from "@material-ui/styles";
const useStyles = makeStyles({
    rootSearch: {
        paddingTop: 6,
        display: 'flex',
        alignItems: 'center'
      },
      input: {
          fontFamily: 'IranSans'
      },
        paper: {
            display: 'flex',
            alignItems: 'center',
            borderRadius: "15px",
            height: 50,
            padding: "0 10px",
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'space-between'
    
          },
          iconButton: {
          },
    
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
        marginRight: 10
    },
    newAddressTitle: {
        color: '#2C7BE5',
        fontSize: 14,
        marginTop: 10,
        padding: 2
    }
})
const UserDataAddress = () => {
    const classes = useStyles();
    const history = useHistory();
    return(
        <div className={classes.root}>
            <div className={classes.title}>
                <PinDropIcon className={classes.locIcon}/>
                <span className={classes.titleText}>لطفا اطالاعات را دقیق وارد کنید</span>
            </div>
            <div className={classes.rootSearch}>
            <Paper component="form" className={classes.paper}>
            <InputBase
              className={classes.input}
              placeholder="شماره تماس"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            
          </Paper>
         </div>
         <div className={classes.rootSearch}>
            <Paper component="form" className={classes.paper}>
            <InputBase
              multiline
              rowsMax={4}
              className={classes.input}
              placeholder="آدرس"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            
          </Paper>
         </div>
         
            
        </div>
    )
}
export default UserDataAddress;