"use server";
import { signIn } from "next-auth/react";
export default async function Button({
  buttonText,
  clickFunction,
}: {
  buttonText: string;
  clickFunction: Function;
}) {
  return (
    <button className="absolute right-5 bg-orange-600 p-2 w-28 text-white rounded-xl font-semibold">
      {buttonText}
    </button>
  );
}
