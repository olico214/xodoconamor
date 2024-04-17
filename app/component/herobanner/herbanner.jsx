import Component from "./carrousel"


export default function Hero() {

  return (
    <section>
      <div className="py-20 text-white bg-black ">
        <div className="container flex flex-col items-center mx-auto my-12 md:flex-row md:my-24">
          <div className="flex flex-col items-start justify-center w-full p-8 lg:w-1/3">
            <h1 className="p-2 text-3xl text-yellow-300 md:text-5xl tracking-loose">
              XODOCONAMOR
            </h1>
            <h2 className="mb-2 text-3xl leading-relaxed md:text-5xl md:leading-snug">
              Un viaje al amor
            </h2>
            <p className="mb-4 text-sm md:text-base text-gray-50">
              Descrubre nuestros nuevos productos
            </p>
            <a
              href="#"
              className="px-4 py-2 text-yellow-300 bg-transparent border border-yellow-300 rounded shadow hover:bg-yellow-300 hover:text-black hover:shadow-lg hover:border-transparent"
            >
              Ver Ahora
            </a>
          </div>
          <div className="justify-center p-8 mt-12 mb-6 ml-0 md:mb-0 md:mt-0 md:ml-12 lg:w-2/3">
            <Component/>
          </div>
        </div>
      </div>
    </section>
  )
}