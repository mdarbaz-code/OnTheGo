import React from 'react';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex items-center justify-between border-b pb-6">
      <div className="flex items-center gap-4 flex-1">
        {item.image && (
          <img 
            src={item.image} 
            alt={item.name}
            className="w-20 h-20 object-cover rounded"
          />
        )}
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded">
          <button
            onClick={() => onDecrease(item.id)}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
          >
            −
          </button>
          <span className="px-4 py-1">{item.quantity}</span>
          <button
            onClick={() => onIncrease(item.id)}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
          >
            +
          </button>
        </div>

        <div className="w-20 text-right">
          <p className="font-semibold">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>

        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 font-semibold"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
