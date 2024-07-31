import MealCard from "@/components/MealCard";
export default async function Menu() {
  let meals = await fetch('https://fraiche-backend.onrender.com/api/v1/meals', {
    cache:'no-store'
  });
  meals = await meals.json();
  return (
    <div className="flex flex-col md:pt-32">
      <header className="px-5 md:px-14">
      <h3 className="text-white text-2xl">Our Menu</h3>
      </header>
      <div className="grid grid-cols-2 py-20  md:pt-14 md:py-32 px-5 md:px-14 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {meals.data.map(({ name, image, price }, index) => (
          <MealCard key={index} name={name} index={index} img={image} price={price} />
        ))}
      </div>
    </div>
  );
}
