"use client";
import Image from "next/image";
import { useState, useCallback } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const MealCard = (meal) => {
  const [ordering, setOrdering] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const cartMeals = JSON.parse(localStorage.getItem("fraiche-cart")) || [];
  console.log(cartMeals);

  const addToCart = () => {
    let newCart;
    console.log(cartMeals);
    if (cartMeals) {
      newCart = [...cartMeals, { meal, quantity }];
    } else {
      newCart = [{ meal, quantity }];
    }

    localStorage.setItem("fraiche-cart", JSON.stringify(newCart));
  };

  const handleQuantityUpdate = (action) => {
    const indexToUpdate = cartMeals.findIndex((x) => x.meal._id === meal._id);

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
    <div
      className="flex flex-col flex-start md:h-[370px] justify-between rounded-lg border-fraiche-yellow border p-3"
      key={meal.name}
    >
      <div className="w-full h-4/6  rounded-t-lg zoomContainer">
        <Image
          src={meal.image}
          className="w-full h-full rounded-lg zoomImage"
          alt={meal.name}
          width={500}
          height={300}
        />
      </div>
      <div className="md:text-lg font-medium flex flex-row justify-between items-center w-full">
        <span className="block">{meal.name}</span>
        <span className="block">N{meal.price}</span>
      </div>
      {ordering ? (
        <div className="flex flex-col gap-2">
          <div className="text-xs flex justify-between">
            <span>Quantity</span>
            <span>Customize</span>
          </div>
          <div className="flex items-center w-full justify-between">
            <button
              onClick={() => {
                if (quantity < 1) return;
                setQuantity(quantity - 1);
              }}
              className="bg-fraiche-yellow rounded-md p-3"
            >
              <FaMinus size={20} />
            </button>
            {quantity}
            <button
              onClick={() => {
                if (quantity < 0) return;
                setQuantity(quantity + 1);
                handleQuantityUpdate("plus");
              }}
              className="bg-fraiche-yellow  rounded-md  p-3"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => {
            addToCart();
            setOrdering(true);
          }}
          className="bg-fraiche-yellow py-2 rounded-md w-full px-4"
        >
          Add to Cart
        </button>
      )}
      {/* <a
        href={`https://wa.me/2347025706611/?text=I want to Buy ${name} for N${price} from Fraiche Palace Restaurant`}
      >
        <button className="bg-fraiche-yellow py-2 rounded-md w-full px-4">
          Add to Cart
        </button>
      </a> */}
    </div>
  );
};

export default MealCard;
