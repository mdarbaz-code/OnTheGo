const OrderSummary = ({ subtotal }) => {
  const deliveryFee = 15;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + deliveryFee + tax;

  return (
    <div className="bg-white rounded-xl shadow p-6 h-fit">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>

      <div className="space-y-3 text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>₹{deliveryFee}</span>
        </div>

        <div className="flex justify-between">
          <span>Tax (8%)</span>
          <span>₹{tax}</span>
        </div>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between text-lg font-bold">
        <span>Total</span>
        <span className="text-orange-500">₹{total}</span>
      </div>

      <button className="w-full mt-6 bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 rounded-lg font-semibold">
        Proceed to Checkout
      </button>

      <div className="mt-6 bg-blue-50 p-4 rounded-lg text-sm text-blue-700">
        <p className="font-semibold mb-2">Delivery Info:</p>
        <p>✓ Free delivery on orders over ₹1500</p>
        <p>✓ Estimated delivery: 30–45 minutes</p>
        <p>✓ Track your order in real time</p>
      </div>
    </div>
  );
};

export default OrderSummary;