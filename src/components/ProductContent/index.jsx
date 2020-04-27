// @flow
import * as React from 'react';
import injectSheet from 'react-jss';
import productImages from '../../mocks/productImages';
import MostSellers from '../../components/Home/MostSellers/MostSellers'
import NotFound from '../NotFound';
import CarouselProductDetail from '../../mainComponents/Carousel/CarouselProductDetail';
import AddOrRemoveFromShCard from '../../mainComponents/AddOrRemove/AddOrRemoveFromShCard';
import AddToShoppingCard from '../../mainComponents/AddToShoppingCard/AddToShoppingCard';



const styles = theme => ({
  wrapper: {
    padding: '5px 0',
    width: '100%',
  
  },
  carouselItem: {
    backgroundColor: 'white',
    borderRadius: 15,
    textAlign: 'center',
    padding: '10px 0',
    marginTop: 5
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: '10px',
    marginTop: 5
  },
  details: {
    color: '#9A9A9A',
    fontSize: 14,
    fontWeight: 700
  },
  title: {
    color: '#9A9A9A',
    fontSize: 16,
    fontWeight: 700
  },
  extraInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 5
  },
  priceInfo: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: '62%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: '10px 15px'
  },
  addClasses: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: '35%%',
    padding: '2px 0'
  },
  
  offPrice: {
    fontSize: 15,
    color: "#36CE91",
    fontWeight: 600,
    alignSelf: "center"
  },
  originalPrice: {
    fontSize: 13,
    color: "red",
    textDecoration: "line-through"
  },
  heading: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },
  content: {
    fontFamily: 'Georgia, serif',
    lineHeight: '1.8em',
    fontSize: 16,
    color: theme.baseColor,
    overflowWrap: 'break-word',
    '@media (min-width: 860px)': {
      fontSize: 21,
    },
    '& h3': {
      extend: 'heading',
      fontSize: 30,
      '@media (min-width: 860px)': {
        fontSize: 34,
      },
    },
    '& h4': {
      extend: 'heading',
      fontSize: 24,
      '@media (min-width: 860px)': {
        fontSize: 26,
      },
    },
    '& a': {
      color: theme.brandPrimary,
    },
    '& pre': {
      background: 'rgba(0,0,0,.05)',
      padding: 20,
      whiteSpace: 'pre-wrap',
      marginTop: 35,
      marginBottom: 0,
      fontSize: 14,
      '@media (min-width: 860px)': {
        fontSize: 16,
      },
    },
    '& pre+pre': {
      marginTop: 0,
      paddingTop: 4,
    },
    '& blockquote': {
      fontSize: 21,
      lineHeight: 1.4,
      letterSpacing: '-.005em',
      fontWeight: 400,
      fontStyle: 'italic',
      color: 'rgba(0,0,0,.58)',
      marginTop: 35,
      marginBottom: 35,
      fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      '@media (min-width: 860px)': {
        fontSize: 30,
      },
    },
    '& ol': {
      padding: 0,
      listStyle: 'none',
      listStyleImage: 'none',
      counterReset: 'post',
      '& li': {
        marginLeft: 30,
        marginBottom: 14,
        '&:before': {
          paddingRight: 12,
          counterIncrement: 'post',
          content: 'counter(post) "."',
          position: 'absolute',
          display: 'inline-block',
          boxSizing: 'border-box',
          width: 78,
          marginLeft: -78,
          textAlign: 'right',
        },
      },
    },
  },
  tag: {
    margin: [[50, 0]],
  },
  tagLabel: {
    color: theme.baseColor,
    padding: 10,
    backgroundColor: '#eeeeee',
    borderRadius: 4,
    marginRight: 10,
    marginBottom: 10,
    display: 'inline-block',
    fontSize: 14,
    '&:last-child': {
      marginRight: 0,
    },
    '&:hover': {
      backgroundColor: '#dddddd',
    },
  },
});
const ProductContent = (props) => {
  const { classes, isLoading } = props;

  return(
    
<div className={classes.wrapper}>
  <div className={classes.carouselItem}>
  <CarouselProductDetail 
      dots={true}
      slidesPerPage={1}
      rtl 
      keepDirectionWhenDragging
      data={productImages} />
      <span className={classes.title}>نام محصول</span>
  </div>
        <div className={classes.info}>
          <span className={classes.details}>
          مشخصات
          </span>
          <span className={classes.title}>
          برند: چوپان
        </span>
        <span className={classes.title}>
          وزن: 200 گرم
        </span>
        <span className={classes.title}>
          نوع: موسیر
        </span>
        </div>
        
        <div className={classes.extraInfo}>
          <div className={classes.priceInfo}>
            <span className={classes.offPrice}>12000 تومان</span>
            <span className={classes.originalPrice}>13000 تومان</span>
          </div>
          {/* <AddToShoppingCard/> */}
          <div className={classes.addClasses}>
           <AddOrRemoveFromShCard number={2} id={1}/>
          </div>
        </div>   
        <MostSellers/>     
        {/* {
        isLoading?
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <div className="placeholder" style={{ width: '100%' }} />
            <div className="placeholder" style={{ width: '100%' }} />
            <div className="placeholder" style={{ width: '50%' }} />
          </div>
        </div>
        :
         '' */}
      {/* } */}
      </div>
      
        
    
  )
}

export default injectSheet(styles)(ProductContent);
