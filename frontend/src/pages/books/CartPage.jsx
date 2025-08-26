import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getImgUrl } from "../../utils/getImgUrl";
import { clearCart, removeFromCart } from "../../redux/features/cart/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.newPrice, 0)
    .toFixed(2);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mt-20 max-w-5xl mx-auto bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">🛒 Shopping Cart</h2>
        {cartItems.length > 0 && (
          <button
            type="button"
            onClick={handleClearCart}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-red-500 text-white shadow hover:bg-red-600 transition-all"
          >
            Clear Cart
          </button>
        )}
      </div>

      {/* Cart Items */}
      <div className="p-6">
        {cartItems.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {cartItems.map((product) => (
              <li
                key={product?._id}
                className="flex py-6 items-center hover:bg-gray-50 rounded-lg px-2 transition"
              >
                {/* Image */}
                <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-lg border bg-white">
                  <img
                    alt={product?.title}
                    src={getImgUrl(product?.coverImage)}
                    className="h-full w-full object-contain p-2"
                  />
                </div>

                {/* Info */}
                <div className="ml-5 flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors">
                        <Link to={`/books/${product?._id}`}>
                          {product?.title}
                        </Link>
                      </h3>
                      <p className="text-lg font-bold text-indigo-600">
                        ${product?.newPrice}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      <strong>Category: </strong>
                      {product?.category}
                    </p>
                  </div>

                  {/* Qty + Remove */}
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-600">Qty: 1</span>
                      {/* (Optional: Quantity controls can be added here) */}
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(product)}
                      type="button"
                      className="text-sm font-medium text-red-500 hover:text-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">🛍️ Your cart is empty</p>
            <Link
              to="/"
              className="inline-block mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Continue Shopping →
            </Link>
          </div>
        )}
      </div>

      {/* Footer Summary */}
      {cartItems.length > 0 && (
        <div className="border-t border-gray-200 px-6 py-6">
          <div className="flex justify-between text-lg font-semibold text-gray-800">
            <span>Subtotal</span>
            <span>${totalPrice ? totalPrice : 0}</span>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>

          {/* Checkout */}
          <div className="mt-6">
            <Link
              to="/checkout"
              className="w-full flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-md hover:bg-indigo-700 transition"
            >
              Proceed to Checkout
            </Link>
          </div>

          {/* Continue Shopping */}
          <div className="mt-6 flex justify-center text-sm text-gray-600">
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-indigo-600 transition-colors"
            >
              Continue Shopping →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
