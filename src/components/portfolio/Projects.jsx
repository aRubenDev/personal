export default function Projects() {
  return (
    <section className="flex flex-col w-full p-4 items-center">
      <div className="flex flex-col text-center items-center">
        <h1 className="relative flex text-5xl font-bold my-5 mb-16 text-center">
          Proyectos
          <span className="absolute -bottom-5 p-1 w-20 h-1 bg-[#B2DAB2] rounded-full"></span>
        </h1>
        <p className="text-lg -mt-5 mb-10 italic">
          Projectos desarrollados en el tiempo.
        </p>
      </div>
    </section>
  );
}
