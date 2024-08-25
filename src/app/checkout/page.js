"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

export default function Page() {
  const [cartMeals, setCartMeals] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const locallyStoredMeals = JSON.parse(localStorage.getItem("fraiche-cart"));

  useEffect(() => {
    if (locallyStoredMeals) {
      setCartMeals(locallyStoredMeals);
      const priceArray = locallyStoredMeals.map((meal) => meal.meal.price);
      setSubTotal(priceArray.reduce((acc, next) => acc + next.meal.price));
    } else {
      setCartMeals([]);
    }
    // console.log(cartMeals);
  }, []);

  const handleQuantityUpdate = (action, id) => {
    const indexToUpdate = cartMeals.findIndex((x) => x.meal._id === id);

    if (indexToUpdate !== -1) {
      if (action === "plus") {
        cartMeals[indexToUpdate].quantity += 1;
      } else if (action === "minus" && cartMeals[indexToUpdate].quantity > 0) {
        cartMeals[indexToUpdate].quantity -= 1;
      }

      // Update the localStorage with the new cartMeals
      localStorage.setItem("fraiche-cart", JSON.stringify(cartMeals));
      console.log(cartMeals);
    }
  };
  return (
    <div className="px-10 flex flex-col  items-center">
      <di className="flex mt-10 w-full items-end justify-between">
        <h2 className="md:text-5xl text-2xl  font-bold">Cart Summary</h2>

        <Link className="text-fraiche-yellow" href="/menu">
          Back to Menu
        </Link>
      </di>
      <div className="flex w-full justify-between bg-[#1F1F1F] py-6 px-4 text-2xl font-semibold my-5">
        <h4>Sub_Total</h4>
        <span>{subTotal}</span>
      </div>
      <div className="w-full md:w-1/3">
        {cartMeals && cartMeals.length > 0 ? (
          <div className="flex">
            {cartMeals.map(({ meal, quantity }, index) => (
              <div
                key={index}
                className="border-fraiche-yellow border p-3 rounded-lg"
              >
                <div className="flex p">
                  <div className="w-full h-2/6  rounded-t-lg zoomContainer">
                    <Image
                      src={meal.image}
                      className="w-full h-full rounded-lg zoomImage"
                      alt={meal.name}
                      width={500}
                      height={300}
                    />
                  </div>
                  <div>
                    <span>{meal.name}</span>
                    <span>Price: {meal.price}</span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-2">
                    <div className="text-xs flex justify-between">
                      <span>Quantity</span>
                      <span>Customize</span>
                    </div>
                    <div className="flex items-center w-full justify-between">
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
                          if (quantity < 0) return;
                          handleQuantityUpdate("plus", meal._id);
                        }}
                        className="bg-fraiche-yellow  rounded-md  p-3"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          "No items in cart"
        )}
      </div>
    </div>
  );
}
