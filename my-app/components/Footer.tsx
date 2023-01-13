import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center ">
      <div className="space-y-2 mt-14">
        <p className="subpixel-antialiased text-gray-400/90 mx-10 text-center">
          Built with{" "}
          <Link
            className="hover:text-gray-700 hover:decoration-dashed hover:underline cursor-pointer transition duration-500 ease-in-out"
            href="https://nextjs.org/"
          >
            Next.js
          </Link>
          ,{" "}
          <Link
            className="hover:text-gray-700 hover:decoration-dashed hover:underline cursor-pointer transition duration-500 ease-in-out"
            href="https://tailwindcss.com/"
          >
            Tailwind
          </Link>{" "}
          and{" "}
          <Link
            className="hover:text-gray-700 hover:decoration-dashed hover:underline cursor-pointer transition duration-500 ease-in-out"
            href="https://vercel.com/"
          >
            Vercel
          </Link>{" "}
          by Saul
        </p>
        <div className="flex justify-center  space-x-4">
          <Link
            href={"https://twitter.com/robinglto"}
            className="hover:text-gray-700 subpixel-antialiased text-md text-gray-400/90 cursor-pointer transition duration-500 ease-in-out"
          >
            Twitter
          </Link>
          <Link
            href={"https://github.com/robinglto"}
            className="hover:text-gray-700 subpixel-antialiased text-md text-gray-400/90 cursor-pointer transition duration-500 ease-in-out"
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  );
}
