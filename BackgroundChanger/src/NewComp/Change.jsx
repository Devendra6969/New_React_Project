import React, { useState } from 'react'

function Change() {
    const [color, setColor] = useState("black")
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-2">
        <button
          className="bg-red-800 p-1 rounded-2xl h-10 w-30 text-white"
          onClick={() => setColor("red")}
        >
          red
        </button>

        <button
          className="bg-blue-700 p-1 rounded-2xl h-10 w-30 text-white"
          onClick={() => setColor("blue")}
        >
          blue
        </button>

        <button
          className="bg-green-900 p-1 rounded-2xl h-10 w-30 text-white"
          onClick={() => setColor("Green")}
        >
          Green
        </button>

        <button
          className="bg-white p-1 rounded-2xl h-10 w-30 text-black text-2xl"
          onClick={() => setColor("white")}
        >
          white
        </button>

        <button
          className="bg-pink-800 p-1 rounded-2xl h-10 w-30 text-white"
          onClick={() => setColor("pink")}
        >
          pink
        </button>

        <button
          className="bg-zinc-900 p-1 rounded-2xl h-10 w-30 text-white"
          onClick={() => setColor("black")}
        >
          black
        </button>
      </div>
    </div>
  );
}

export default Change