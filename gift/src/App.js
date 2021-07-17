import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import NotFound from './components/notFoundPage/NotFound';

import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import IconTop from './components/iconTop/IconTop';
import Product from './components/Product/Product';
import Category from './components/category/category';
import ContactPage from './components/contactpage/ContactPage';
import ShoppingCart from './components/shoppingcart/ShoppingCart';
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/blog" component={ShoppingCart} />
        <Route path="/category" component={Category} />
        <Route path="/contact" component={ContactPage} />

        <Redirect exact from="/" to="/home" />
        <Route path="*" component={NotFound} />
      </Switch>
      <IconTop />
    </>
  );
}

export default App;
