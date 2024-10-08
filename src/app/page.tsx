import Image from 'next/image';
import Header from './components/Header';
export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh]">
      <Header/>
      <main className="relative pb-24 pl-4 lg:pl-16">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pg-12">
          <div className="absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col  bg-blue-500">
            <Image
              src="/ba.jpg"
              alt="Witcher"
              fill={true}
              className="object-cover h-[65vh] lg:h-[95vh] object-left"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent  to-black"></div>
          </div>
          <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
            The Witcher
          </h1>

          <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
            Clássico contemporâneo do cinema internacional, esse longa-metragem leva o espectador por um enredo que desafia os estereótipos da idade, misturando humor, sabedoria e uma visão única sobre o mundo moderno dos negócios.
          </p>
        </div>

        <div className="flex space-x-3">
          <button className="md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-white text-black px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:px-8 md:py-2.5">Play</button>
          <button className="md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-gray-600 text-black px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:px-8 md:py-2.5">More info</button>
        </div>

      </main>
    </div>
  );
}
