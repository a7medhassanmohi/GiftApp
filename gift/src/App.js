import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min";
import "popper.js/dist/umd/popper.min";
import "bootstrap/dist/js/bootstrap.min";
import ContactPage from './component/ahmed/contactpage/ContactPage';
import ShoppingCart from './component/ahmed/shoppingcart/ShoppingCart';

function App() {
  return (
    <div className="App">
      {/* <ContactPage /> */}
      <ShoppingCart />
    </div>
  );
}

export default App;
