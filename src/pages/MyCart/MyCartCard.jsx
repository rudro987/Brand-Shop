/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyCartCard = ({ filteredCartItems }) => {
  const [cartItems, setCartItems] = useState(filteredCartItems);
    const handleDelete = (id) => {
        fetch(`https://brand-shop-server-side-71jynkzgp-tanvir-hossains-projects.vercel.app/my-cart/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                toast.success('Item deleted successfully!');
                setCartItems(cartItems.filter((item) => item._id !== id));
            }
        });
    };
  return (
    <div>
    <h2 className="text-3xl font-bold text-center mt-20 mb-10">Your cart</h2>
    {cartItems.length === 0 ? (
          <div>
              <p className="w-full h-[40vh] flex justify-center items-center text-2xl lg:text-4xl text-center">
                You haven't added anything to your cart yet!
              </p>
            </div>
            ) : (
              cartItems.map((item) => (
        <div
          key={item._id}
          className="mx-auto flex max-w-3xl flex-col"
        >
          
          <ul className="flex flex-col divide-y divide-gray-200">
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
              <div className="lg:flex w-full space-y-2 sm:space-x-4 rounded-lg">
                <img
                  className="flex-shrink-0 object-cover outline-none dark:border-transparent sm:h-60 sm:w-80 rounded-md"
                  src={item.image}
                  alt={item.productName}
                />
                <div className="flex w-full flex-col justify-items-center pb-4 lg:p-10 rounded">
                  <div className="lg:flex w-full justify-center space-y-3 lg:space-y-0 lg:space-x-2 bg-[#F5F5F5] dark:bg-formBg px-5 py-10 rounded-lg">
                    <div className="space-y-3 text-black dark:text-white text-center lg:text-left">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        {item.productName}
                      </h3>
                      <p className="text-sm">Brand: {item.brandName}</p>
                    </div>
                    <div className="text-center lg:text-right">
                      <p className="text-base font-semibold text-black dark:text-white">Price: ${item.price}</p>
                    </div>
                  </div>
                  <div className="flex divide-x text-sm mx-auto mt-5">
                    <button
                    onClick={() => handleDelete(item._id)}
                      type="button"
                      className="flex items-center space-x-2 px-2 py-1 pl-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-trash"
                      >
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      </svg>
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      ))
    )}
      <div className="text-center my-10">
        <p>
          Total amount:<span className="font-semibold"> ${
            filteredCartItems.reduce((acc, item) => acc + item.price, 0)
          }</span>
        </p>
      </div>
      <div className="flex justify-center space-x-4 mb-10">
        <Link to="/">
          <button
            type="button"
            className="btn text-white dark:text-black hover:text-black dark:hover:text-white bg-black dark:bg-btnColor dark:hover:bg-black hover:bg-btnColor border-none"
          >
            Back to Home
          </button>
        </Link>
        <button
          type="button"
          className="btn text-black dark:text-white hover:text-white dark:hover:text-black bg-btnColor dark:bg-black dark:hover:bg-btnColor hover:bg-black border-none"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default MyCartCard;
