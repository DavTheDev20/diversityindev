import Jumbotron from "../components/Jumbotron";

export default function About() {
  return (
    <div>
      <Jumbotron>
        <div className="w-full h-52 bg-no-repeat bg-cover bg-[url(/images/marvin-meyer-SYTO3xs06fU-unsplash.jpg)] opacity-20 lg:h-64)]"></div>
        <div className="absolute ml-2 lg:w-3/6 mx-auto">
          <h1 className="text-2xl font-bold text-orange-600 lg:text-3xl ml-8">
            About Us
          </h1>
        </div>
      </Jumbotron>
      <div>
        <h2 className="text-xl text-center my-4 font-bold text-violet-600">
          Our Values
        </h2>
        <div className="mb-6 w-11/12 m-auto">
          <h3 className="mb-1 text-lg font-semibold text-orange-600">
            Inclusivity
          </h3>
          <p>
            Regardless of what role you play in tech or where you come from, we
            want you to feel welcomed to offer your unique perspective.
          </p>
        </div>
        <div className="mb-6 w-11/12 m-auto">
          <h3 className="mb-1 text-lg font-semibold text-orange-600">
            Innovation
          </h3>
          <p>
            Organizations that have embraced diversity have seen tangible
            benefits to doing so. The distinct perspectives that diverse groups
            bring allows innovation to happen quickly and have a greater impact.
          </p>
        </div>
        <div className="mb-6 w-11/12 m-auto">
          <h3 className="mb-1 text-lg font-semibold text-orange-600">
            Collaboration
          </h3>
          <p>
            With a diverse group, you can fully take advantage of collaboration.
            On this website, we want to provide a space where like minded
            individuals can provide insights on the industry and work to foster
            innovation.
          </p>
        </div>
      </div>
    </div>
  );
}
