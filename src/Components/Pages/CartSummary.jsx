import { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../Core/components/CartItem";
import OrderSummary from "../Core/components/OrderSummary";
import EmptyCart from "../Core/components/EmptyCart";
import { useCart } from "../../context/CartContext";

const CartSummary = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  // Increase quantity
  const increaseQty = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  // Remove item
  const removeItem = (id) => {
    removeFromCart(id);
  };

  // Calculate subtotal
  const subtotal = getCartTotal();

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
