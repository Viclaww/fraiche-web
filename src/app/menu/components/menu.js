import MealCard from "@/components/MealCard";
import jollof from "@/images/jollofrice.png";
import fries from "@/images/chips.png";
import friedrice from "@/images/friedrice.png";
import grilledfish from "@/images/grilledfish.png";

export default function Menu() {
  const meals = [
    { name: "Jollof Rice", price: 2000, img: jollof },
    { name: "Fries", price: 2000, img: fries },
    { name: "Fried Rice", price: 2000, img: friedrice },
    { name: "Grilled Fish", price: 2000, img: grilledfish },
    { name: "Jollof Rice", price: 2000, img: jollof },
    { name: "Fries", price: 2000, img: fries },
    { name: "Fried Rice", price: 2000, img: friedrice },
    { name: "Grilled Fish", price: 2000, img: grilledfish },
    { name: "Jollof Rice", price: 2000, img: jollof },
    { name: "Fries", price: 2000, img: fries },
    { name: "Fried Rice", price: 2000, img: friedrice },
    { name: "Grilled Fish", price: 2000, img: grilledfish },
  ];
  return (
    <div className="grid grid-cols-2 py-20  md:pt-32 md:py-32 px-5 md:px-14 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {meals.map(({ name, img, price }, index) => (
        <MealCard name={name} index={index} img={img} price={price} />
      ))}
    </div>
  );
}
