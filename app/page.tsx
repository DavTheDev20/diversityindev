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
        <div className="w-full h-52 bg-[url(/images/annie-spratt-QckxruozjRg-unsplash.jpg)] opacity-20"></div>
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
            className="absolute right-1 bg-orange-600 p-2 w-28 text-white rounded-xl font-semibold text-center"
            href="/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F"
          >
            Sign Up
          </a>
        </div>
      </Jumbotron>
      <div className="flex justify-center items-center flex-row mt-10">
        <div className=" flex flex-col items-center">
          <img src="/images/together.png" className="w-16" />
          <h3 className="mt-5 text-lg font-bold text-violet-600">
            Inclusivity
          </h3>
        </div>
        <div className="mx-5 flex flex-col items-center">
          <img src="/images/project-management.png" className="w-16" />
          <h3 className="mt-5 text-lg font-bold text-violet-600">Innovation</h3>
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/collaboration.png" className="w-16" />
          <h3 className="mt-5 text-lg font-bold text-violet-600">
            Collaboration
          </h3>
        </div>
      </div>
      <div className="my-5 w-11/12 m-auto">
        <p className="text-center">
          At Diversity in Dev our goal is to provide an environment where
          individuals all over the tech industry can come together and share
          their unique experiences. Technology allows ordinary people to create
          extraordinary things, and this is the place where we want to highlight
          that. Regardless of where you come from or what you look like,
          technology can allow you to open new possibilities.
        </p>
      </div>
    </main>
  );
}
