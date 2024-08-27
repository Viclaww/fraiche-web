"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [timer, setTimer] = useState(10);
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      } else {
        // Redirect to /menu
        router.push("/menu");
      }
      clearInterval(interval);
    }, 1000);
    if (timer === 0) {
      clearInterval(interval);
      // Redirect to /menu
      router.push("/menu");
    }
    return () => clearInterval(interval);
  }, [timer]);
  return (
    <>
      <div className="flex w-screen h-screen justify-center items-center flex-col">
        <Image src="/images/check.png" width={100} height={100} alt="check" />
        <div className="flex flex-col justify-center items-center">
          <h2>Your payment was verified</h2>
          <p>Thank you for dining with us, we can’t wait to serve you again</p>
          <button className="bg-fraiche-yellow py-2 px-3 rounded">
            Returning to Menu in {timer} seconds
          </button>
        </div>
      </div>
    </>
  );
}
