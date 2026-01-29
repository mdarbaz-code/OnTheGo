import { useState } from "react";
import { Link } from "react-router-dom";
import cartData from "../../data/cartData";
import CartItem from "../Core/components/CartItem";
import OrderSummary from "../Core/components/OrderSummary";
import EmptyCart from "../Core/components/EmptyCart";

const CartSummary = () => {
  const [cartItems, setCartItems] = useState(cartData);

  // Increase quantity
  const increaseQty = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Empty cart condition
  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={increaseQty}
              onDecrease={decreaseQty}
              onRemove={removeItem}
            />
          ))}

          <Link
            to="/restaurants"
            className="inline-block text-orange-500 hover:underline"
          >
            ← Continue Shopping
          </Link>
        </div>

        <OrderSummary subtotal={subtotal} />
      </div>
    </div>
  );
};

export default CartSummary;
