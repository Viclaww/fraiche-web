import Link from "next/link";

export default function Page() {
  const cartMeals = JSON.parse(localStorage.getItem("fraiche-cart")) || [];
  return (
    <div>
      <div>
        <h2>Cart Summary</h2>

        <Link to="/menu">Back to Menu</Link>
      </div>
      <div>
        <h4>Sub_Total</h4>
        <span>Price</span>
      </div>
      <div>
        {cartMeals && cartMeals.length > 0 ? (
          <div>
            {cartMeals.map(({ meal, quantity }, index) => (
              <div></div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
