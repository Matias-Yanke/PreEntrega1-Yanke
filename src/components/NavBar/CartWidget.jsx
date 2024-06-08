import { PiShoppingCartSimpleThin } from "react-icons/pi";
import './CartWidget.css';

const CartWidget = () => {
    return (
      <div className="cart-container">
        <div className="cart-icon-container">
          <PiShoppingCartSimpleThin size={30} />
        </div>
        <div className="cart-counter">
          <p>1</p>
        </div>
      </div>
    )
  }
  
  export default CartWidget;