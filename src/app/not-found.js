import Image from "next/image";
import pana from "@/images/pana.png";
import Link from "next/link";
export default function NotFound() {
  const redirects = [
    { name: "Home", path: "/", desc: "Return to our homepage" },
    { name: "Menu", path: "/menu", desc: "Check out our delicious offerings" },
    { name: "Reservations", path: "/reserve", desc: "Make a reservation" },
    { name: "Contact Us", path: "/contact", desc: "Get in touch with us." },
  ];
  return (
    <div className="w-full h-screen px-5 md:px-10 flex justify-center items-center">
      <div className="flex flex-col font-medium md:flex-row items-center gap-5 md:gap-10">
        <div className="w-full flex justify-center">
          <Image
            src={pana}
            width={0}
            height={0}
            className="w-2/3 h-full"
            alt="image"
          />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold">Oops, Lost?</h2>
          <p>
            It looks like you’ve taken the wrong turn. Don’t worry it happens to
            the best of us! Here are some options to help you get back on track
          </p>

          <div>
            {redirects.map(({ name, path, desc }, index) => (
              <>
                <p key={index}>
                  <Link className="text-fraiche-yellow mr-2" href={path}>
                    {name}
                  </Link>
                  <span>{desc}</span>
                </p>
              </>
            ))}
          </div>
          <p>
            If you believe this is an error, please let us know at
            <Link
              href="mailto:info@fraiche.com"
              className="text-fraiche-yellow"
            >
              {" "}
              info@fraiche.com
            </Link>
            <br />
            <span>Bon Apetit, Fraiche Team</span>
          </p>
        </div>
      </div>
    </div>
  );
}
