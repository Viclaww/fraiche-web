import "./globals.css";

export const metadata = {
  title: "Fraiche Palace Restaurant",
  description: "Where flavour meats passion...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/porkys" rel="stylesheet" />
      </head>
      <body className="bg-black-prime font-poppins w-screen text-white overflow-x-hidden">
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
