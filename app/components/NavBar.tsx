export default function NavBar() {
  return (
    <nav className="bg-violet-600 h-20">
      <h3 className="text-white float-left mt-6 ml-10 font-semibold text-2xl">
        Diversity In Dev
      </h3>
      <div className="flex justify-end align-middle">
        <div id="hambuger" className="pr-6 pt-6">
          <div className="bg-white w-10 h-1 mb-2"></div>
          <div className="bg-white w-10 h-1 mb-2"></div>
          <div className="bg-white w-10 h-1"></div>
        </div>
      </div>
    </nav>
  );
}
