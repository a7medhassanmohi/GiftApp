import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min";
import "popper.js/dist/umd/popper.min";
import "bootstrap/dist/js/bootstrap.min";
import ContactPage from './component/ahmed/contactpage/ContactPage';
import ShoppingCart from './component/ahmed/shoppingcart/ShoppingCart';
import Product from './components/Product/Product';

import Category from './components/category/category';
function App() {
  return (<>
    <Category />
    <Product/>
    <ShoppingCart />
    <ContactPage />
  </>
  );
}

export default App;
