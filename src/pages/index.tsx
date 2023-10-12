/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Link from "next/link";
import NavBar from "~/components/NavBar";

export default function Home() {
 
  return (
    <div>
      <NavBar />

      <div className="mx-20 mb-10 flex flex-col items-center justify-between selection:h-screen md:flex-row">
        <div className="mt-36 flex w-full items-center justify-center font-bold md:w-1/2">
          <div>
            <div className="text-6xl text-yellow-900">A Delicious</div>
            <div className=" text-6xl text-yellow-900 mb-6">Coffee For You</div>
            <Link
              href="/coffee-shop"
              className="rounded-lg bg-yellow-900 px-16 py-3 text-center text-lg font-bold text-white hover:bg-yellow-800"
              
            >
              ORDER NOW
            </Link>
          </div>
        </div>
        <img
          src="coffee.png"
          className="h-full w-full cursor-pointer md:mt-32 md:w-1/2"
        />
      </div>
    </div>
  );
}
