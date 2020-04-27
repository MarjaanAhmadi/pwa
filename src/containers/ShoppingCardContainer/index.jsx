import React from 'react';
import {Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles';
import ShoppingCardList from '../../components/ShoppingCard/ShoppingCardList/ShoppingCardList';
import shoppingCard from '../../mocks/shoppingCard';
import PayDetails from '../../components/ShoppingCard/PayDetails/PayDetails';
import FullButton from '../../mainComponents/FullButton/FullButton';
const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
    }
})
const ShoppingCardContainer = () => {
    const classes = useStyles();
    const clicked = () => {
        console.log('clicked from shopping card')
    }
    return(
        <div className={classes.root}>
            <ShoppingCardList data={shoppingCard}/>
            <PayDetails />
            <FullButton title='انتخاب زمان تحویل' clicked={clicked}/>
        </div>
    )
}
export default ShoppingCardContainer;