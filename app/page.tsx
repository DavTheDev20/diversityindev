import Button from "./components/Button";
import Jumbotron from "./components/Jumbotron";
import { signIn } from "next-auth/react";

export default async function Home() {
  function login() {
    signIn();
  }

  return (
    <main className="">
      <Jumbotron>
        <div className="w-full h-52 bg-[url(/annie-spratt-QckxruozjRg-unsplash.jpg)] opacity-20"></div>
        <div className="absolute ml-2">
          <h1 className=" text-2xl font-bold text-orange-600">
            Code Together, Thrive Together
          </h1>
          <h2 className="text-xl mt-3 font-semibold text-violet-600">
            Connecting Coders,
          </h2>
          <h2 className="text-xl font-semibold text-violet-600">
            Celebrating Differences
          </h2>
          <a
            className="absolute right-5 bg-orange-600 p-2 w-28 text-white rounded-xl font-semibold text-center"
            href="/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F"
          >
            Sign Up
          </a>
        </div>
      </Jumbotron>
    </main>
  );
}
