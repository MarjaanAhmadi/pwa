import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    paddingTop: 8,
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
        height: 40,
        padding: "0 10px",
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between'

      },
      iconButton: {
      },
  });
const Search = () => {
    const classes = useStyles();    
    return(
         <div className={classes.root}>
            <Paper component="form" className={classes.paper}>
            <InputBase
              className={classes.input}
              placeholder="دنبال چی میگردی؟"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
         </div>

    )
}
export default Search;