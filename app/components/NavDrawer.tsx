export default function NavDrawer({ toggleFunction, links }: any) {
  return (
    <div className="bg-violet-600 w-1/3 absolute z-20 right-0 h-screen shadow-md">
      <div className="p-4" onClick={toggleFunction}>
        <svg
          fill="#ffffff"
          height="35px"
          width="35px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 460.775 460.775"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path>{" "}
          </g>
        </svg>
      </div>
      <div className="mt-5 ml-4">
        {links.map((link: { linkName: string; linkLocation: string }) => {
          return (
            <a
              href={link.linkLocation}
              className="text-white block mt-5 text-xl"
            >
              {link.linkName}
            </a>
          );
        })}
      </div>
    </div>
  );
}
