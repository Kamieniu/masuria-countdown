import React from 'react';

import imageSrc from './background.jpg';
import Countdown from './components/Countdown';

const App = () => {
  return (
    <main className="h-screen w-screen flex items-center ">
      <figure className="absolute top-0  w-full h-full overflow-hidden left-0 flex items-center justify-center">
        <img className="w-full h-full object-cover" src={imageSrc} alt="" />
      </figure>

      <div className="container mx-auto relative flex flex-col items-center">
        <div className="px-10 py-3 md:py-5 text-center bg-white rounded-15 shadow-md">
          <h1 className="text-sm md:text-5xl">Masuria countdown</h1>
        </div>
        <Countdown />

        <a
          className="mt-6 px-3 md:px-6 py-2 md:py-4 bg-blue-200 shadow-md rounded-15 hover:bg-blue-400 duration-200 ease-in-out text-white text-sm md:text-md"
          target="_blank"
          href="https://www.airbnb.pl/rooms/40576035"
        >
          Check this out!
        </a>
      </div>
    </main>
  );
};

export default App;
