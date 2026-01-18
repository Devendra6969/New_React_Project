import React, { useState, useCallback, useEffect, useRef } from 'react'



function Test() {
    const [len, setLen] = useState(8);
    const [numAllow, setNumAllow] = useState(false)
    const [charAllow, setCharAllow] = useState(false)
    const [password, setPassword] = useState("")

    const PasswordGenerator = useCallback(() => {
        let pass = "";
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numAllow) str += "0123456789";
        if(charAllow) str += "!@#$%&*";

        for (let index = 1; index <= len; index++) {
            let char = Math.floor(Math.random() * str.length);

            pass += str.charAt(char);
        }

        setPassword(pass)

    }, [len, numAllow, charAllow, setPassword])

    useEffect(()=>(PasswordGenerator()), [len, numAllow, charAllow, PasswordGenerator])

    // useRef hook
    const passRef = useRef(null)

    // copy password to clipboard
    const copyPassToClipboard = useCallback(() => {
        passRef.current?.select()
      navigator.clipboard.writeText(password);
    }, [password]);

  return (
    <>
      <div className="h-screen w-full bg-slate-950 flex justify-center items-center">
        <div className="min-h-80 w-150 rounded-4xl bg-slate-500 p-4 text-black">
          <h1 className="w-full h-10 bg-slate-400 font-bold text-2xl p-2 text-center rounded-3xl text-shadow-black">
            PASSWORD GENERATOR
          </h1>
          <div className="h-15 w-full bg-slate-700 mt-4 rounded-4xl flex items-center overflow-hidden">
            <input
              type="text"
              value={password}
              readOnly
              ref={passRef}
              onClick={copyPassToClipboard}
              className="h-full bg-gray-500 flex-1 px-3 outline-none"
            />
            <button className="bg-black text-blue-400 px-4 h-full cursor-pointer">
              COPY
            </button>
          </div>
          <div className="w-full flex flex-col bg-sky-200 rounded-4xl p-3 mt-5 border-2 border-slate-900">
            <div className="flex justify-between items-center">
              <label className="font-bold">Length: {len}</label>
            </div>

            <input
              type="range"
              min={8}
              max={20}
              value={len}
              onChange={(e) => setLen(Number(e.target.value))}
              className="w-full cursor-pointer"
            />

            <div className="flex gap-6 mt-3">
              <label className="flex items-center gap-2 font-bold">
                <input
                  type="checkbox"
                  checked={numAllow}
                  onChange={() => setNumAllow((prev) => !prev)}
                />
                NUMBERS
              </label>

              <label className="flex items-center gap-2 font-bold">
                <input
                  type="checkbox"
                  checked={charAllow}
                  onChange={() => setCharAllow((prev) => !prev)}
                />
                CHAR
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test