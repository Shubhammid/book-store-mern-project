import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form"
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const CheckoutPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);
    const { currentUser } = useAuth()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const [isChecked, setIsChecked] = useState(false)
     const onSubmit = (data) => {
     
        const newOrder = {
            name: data.name,
            email: currentUser?.email,
            address: {
                city: data.city,
                country: data.country,
                state: data.state,
                zipcode: data.zipcode
            },
            phone: data.phone,
            productIds: cartItems.map(item => item?._id),
            totalPrice: totalPrice,
        }
    }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
        <div className="border-b pb-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            💵 Cash on Delivery
          </h2>
          <p className="text-gray-600">
            Total Price: <span className="font-semibold">${totalPrice}</span>
          </p>
          <p className="text-gray-600">
            Items: <span className="font-semibold">{cartItems.length > 0 ? cartItems.length : 0}</span>
          </p>
        </div>

        <form className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-700">
            <h3 className="text-xl font-semibold mb-2">Personal Details</h3>
            <p className="text-sm text-gray-500">
              Please fill out all fields below.
            </p>
          </div>

          <div className="lg:col-span-2 grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="md:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                disabled
                placeholder="email@domain.com"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 bg-gray-100 text-gray-500 cursor-not-allowed"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phone"
                placeholder="+123 456 7890"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Address / Street
              </label>
              <input
                type="text"
                id="address"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                placeholder="Country"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                State / Province
              </label>
              <input
                type="text"
                id="state"
                placeholder="State"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="zipcode"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Zipcode
              </label>
              <input
                type="text"
                id="zipcode"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="md:col-span-2 mt-3">
              <label className="inline-flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2">
                  I agree to the{" "}
                  <Link className="underline text-indigo-600">
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link className="underline text-indigo-600">
                    Shopping Policy
                  </Link>
                  .
                </span>
              </label>
            </div>

            <div className="md:col-span-2 text-right">
              <button
                type="submit"
                className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition-all"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
