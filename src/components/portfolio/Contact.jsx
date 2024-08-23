export default function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!event.target.checkValidity()) {
      event.target.reportValidity();
      return;
    }

    const form = event.target;
    const name = form.elements["name"].value;
    const message = form.elements["message"].value;
    const subject = `Correo de contacto - ${name}`;
    const body = `Hola, Ruben García. \n\n${message}`;

      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent("contact@arubendev.me")}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col items-center h-screen p-6 w-full">
      <div className="flex flex-col text-center items-center">
        <h1 className="relative flex text-5xl font-bold my-5 mb-16 text-center">
          Contacto
          <span className="absolute -bottom-5 p-1 w-20 h-1 bg-[#B2DAB2] rounded-full"></span>
        </h1>
        <p className="text-lg -mt-5 mb-10 italic">
          Contacta conmigo a través de este formulario.
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto w-full max-w-md"
        onSubmit={handleSubmit}
      >

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B2DAB2] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B2DAB2] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Mensaje
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B2DAB2] sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#0D7C66] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#0D7C66] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D7C66]"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
