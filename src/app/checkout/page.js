"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";

export default function Page() {
  const locallyStoredMeals = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("fraiche-cart");
    }
  };

  const [cartMeals, setCartMeals] = useState([]);

  useEffect(() => {
    if (locallyStoredMeals()) {
      setCartMeals(JSON.parse(locallyStoredMeals()));
    }
  }, []);

  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      if (cartMeals.length > 0) {
        const priceArray = cartMeals.map(
          (meal) => meal.meal.price * meal.quantity
        );
        return priceArray.reduce((acc, next) => acc + next, 0);
      }
      return 0;
    };
    setSubTotal(calculateTotal());
  }, [cartMeals]);

  const handleQuantityUpdate = (action, id) => {
    const updatedCartMeals = cartMeals.map((meal) => {
      if (meal.meal._id === id) {
        if (action === "plus") {
          return { ...meal, quantity: meal.quantity + 1 };
        } else if (action === "minus" && meal.quantity > 0) {
          return { ...meal, quantity: meal.quantity - 1 };
        }
      }
      return meal;
    });
    setCartMeals(updatedCartMeals);
    localStorage.setItem("fraiche-cart", JSON.stringify(updatedCartMeals));
  };

  const handleRemove = (id) => {
    const updatedCart = cartMeals.filter((x) => x.meal._id !== id);
    setCartMeals(updatedCart);
    localStorage.setItem("fraiche-cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="px-10 flex flex-col items-center">
      <div className="flex mt-10 w-full items-end justify-between">
        <h2 className="md:text-5xl text-2xl font-bold">Cart Summary</h2>

        <Link className="text-fraiche-yellow" href="/menu">
          Back to Menu
        </Link>
      </div>
      <div className="flex w-full justify-between bg-[#1F1F1F] py-6 px-4 text-2xl font-semibold my-5">
        <h4>Sub_Total</h4>
        <span>{subTotal}</span>
      </div>
      <div className="w-full flex flex-col md:w-1/3">
        {cartMeals.length > 0 ? (
          <div className="flex gap-2 flex-col">
            {cartMeals.map(({ meal, quantity }, index) => (
              <div
                key={index}
                className="border-fraiche-yellow border p-3 rounded-lg"
              >
                <div className="flex p">
                  <div className="w-1/2 h-1/6 rounded-t-lg zoomContainer">
                    <Image
                      src={meal.image}
                      className="w-full h-full rounded-lg zoomImage"
                      alt={meal.name}
                      width={500}
                      height={300}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-medium">{meal.name}</span>
                    <span>
                      Price:{" "}
                      <span className="font-medium text-fraiche-yellow">
                        {meal.price}
                      </span>
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-5">
                    <div className="flex items-center w-1/2 justify-between">
                      <button
                        onClick={() => {
                          if (quantity < 1) return;
                          handleQuantityUpdate("minus", meal._id);
                        }}
                        className="bg-fraiche-yellow rounded-md p-3"
                      >
                        <FaMinus size={20} />
                      </button>
                      {quantity}
                      <button
                        onClick={() => {
                          handleQuantityUpdate("plus", meal._id);
                        }}
                        className="bg-fraiche-yellow rounded-md p-3"
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <div
                      onClick={() => handleRemove(meal._id)}
                      className="flex cursor-pointer justify-self-end self-end"
                    >
                      <span className="text-red-700 flex gap-2 items-end">
                        <FaTrash size={25} /> Remove
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          "No items in cart"
        )}
        <button className="flex w-full justify-center my-2 py-2  bg-fraiche-yellow rounded">
          Checkout
        </button>
      </div>
    </div>
  );
}
