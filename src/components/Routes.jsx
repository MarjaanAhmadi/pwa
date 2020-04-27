// @flow
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => null;

const Home = Loadable({
  loader: () => import('../containers/HomeContainer'),
  loading: Loading,
});
const CreateAddress = Loadable({
  loader: () => import('../components/Address/CrudAddress/CreateAddress/CreateAddress'),
  loading: Loading,
});

const Orders = Loadable({
  loader: () => import('../containers/OrdersContainer'),
  loading: Loading,
});

const Products = Loadable({
  loader: () => import('../containers/ProductContainer'),
  loading: Loading,
});

const ProductItem = Loadable({
  loader: () => import('../components/Products/ProductItem'),
  loading: Loading,
});
const Address = Loadable({
  loader: () => import('../containers/AddressContainer'),
  loading: Loading,
});


const Category = Loadable({
  loader: () => import('../containers/CategoryContainer'),
  loading: Loading,
});

const ShoppingCard = Loadable({
  loader: () => import('../containers/ShoppingCardContainer'),
  loading: Loading,
});

const PaymentPage = Loadable({
  loader: () => import('../containers/PaymentContainer'),
  loading: Loading,
});
const NotFound = Loadable({
  loader: () => import('../containers/NotFoundContainer'),
  loading: Loading,
});

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/test" component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/product" component={ProductItem} />
    <Route path="/addresses" component={Address} />
    <Route path="/categories" component={Category} />
    <Route path="/shoppingcard" component={ShoppingCard} />
    <Route path="/paymentpage" component={PaymentPage}/>
    <Route path="/createAddress" component={CreateAddress}/>
    <Route path="/orders" component={Orders}/>
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
