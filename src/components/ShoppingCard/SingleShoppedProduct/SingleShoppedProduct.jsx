import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import AddToShoppingCard from '../../../mainComponents/AddToShoppingCard/AddToShoppingCard';
import AddOrRemoveFromShCard from '../../../mainComponents/AddOrRemove/AddOrRemoveFromShCard';
import { Divider } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: 6,
    height: 105,
    borderRadius: 15,
    justifyContent: 'space-around'
  },
  addOrRemove: {
    padding: 0
  },
  rightSide: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
  },
  name: {
    fontSize: 14,
    fontWeight: 600,
    paddingTop: 5,
  },
  weight: {
    fontSize: 12,
    color: '#9A9A9A',
  },
  weightOff: {
    fontSize: 14,
    fontWeight: 600,
    color: '#36CE91'
  },
  prices: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    height: 45,
    marginTop: 5
  },
  ratingcomp: {
    marginLeft: 20
  },
  data : {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'inherit',
    width: '75%'
  },
  content: {
    flex: '1 0 auto',
    width: "100%"
  },
  cover: {
    width: 50,
    height: 50
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  delete: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  deleteIcon: {
    fontSize: 25,
    color: '#E2574C',
    alignSelf: 'center'
  },
  deleteText: {
    fontSize: 10,
    color: '#E2574C',
    alignSelf: 'center'
  },
}));

export default function SingleShoppedProduct(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
      

    <Card className={classes.root}>
    <div className={classes.rightSide}>
    <CardMedia
        className={classes.cover}
        image="/assets/logo.png"
        title={props.product.name}
      />
      <div className={classes.delete}>
      <DeleteIcon className={classes.deleteIcon}/>
      <span className={classes.deleteText}>حذف</span>
      </div>  
    </div>
     
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div className={classes.data}>
          <span className={classes.name}>
            {props.product.name} {props.product.weight}
          </span>
            <div  className={classes.addOrRemove}>
          <AddOrRemoveFromShCard number={props.product.number}/>

            </div>
          </div>
          
          <Divider variant="light"/>
         <div className={classes.prices}>
         <div className={classes.data}>
            <span className={classes.weight}>قیمت اصلی</span>
            <span className={classes.weight}>12000 تومان</span>
          </div>
          <div className={classes.data}>
            <span className={classes.weight}>قیمت روبیکا</span>
            <span className={classes.weightOff}>12000 تومان</span>
          </div>
         </div>
        </CardContent>
        
      </div>
      
    </Card>
  );
}