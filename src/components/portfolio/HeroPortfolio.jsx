import image from "../../images/hero-portfolio-profile.jpeg";
import { TbCode } from "react-icons/tb";
export default function HeroPortfolio() {
  return (
    <section className="flex flex-col w-full h-[80vh] p-4 items-center">
      <div className="relative">
        <img
          src={image}
          alt="hero-portfolio-profile"
          className="mt-5 size-52 rounded-full border-4 border-[#B2DAB2]"
        />
        <span className="absolute bottom-0 flex items-center bg-white px-3 py-1 -translate-x-1/2 rounded-full mx-[50%] min-w-max shadow-lg">
          <TbCode className="text-3xl text-[#B2DAB2] -ml-1" />
          <p className="text-lg ml-1">Web Developer</p>
        </span>
      </div>
      <h1 className="relative flex text-5xl font-bold my-5">
        A. Rubén García Guerra
        <span className="absolute -bottom-5 p-1 w-20 h-1 bg-[#B2DAB2] -translate-x-1/2 mx-[50%] rounded-full"></span>
      </h1>
      <p className="text-2xl">Desarrollador web </p>
    </section>
  );
}
