"use client";

import NavDrawer from "./NavDrawer";
import { useState } from "react";

export default function NavBar() {
  const [navDrawerToggled, setNavDrawerToggled] = useState(false);

  return (
    <nav className="bg-violet-600 h-20 relative z-10">
      <a
        href="/"
        className="text-white float-left mt-6 ml-10 font-semibold text-2xl"
      >
        Diversity In Dev
      </a>
      {!navDrawerToggled ? (
        <div className="flex justify-end align-middle">
          <div
            id="hambuger"
            className="pr-6 pt-6"
            onClick={() => setNavDrawerToggled(true)}
          >
            <div className="bg-white w-10 h-1 mb-2"></div>
            <div className="bg-white w-10 h-1 mb-2"></div>
            <div className="bg-white w-10 h-1"></div>
          </div>
        </div>
      ) : null}

      {navDrawerToggled ? (
        <NavDrawer
          toggleFunction={() => setNavDrawerToggled(false)}
          links={[
            //Add new links to navdrawer here
            { linkName: "Login", linkLocation: "/login" },
            { linkName: "About", linkLocation: "/about" },
            { linkName: "Blog", linkLocation: "/blog" },
          ]}
        />
      ) : null}
    </nav>
  );
}
