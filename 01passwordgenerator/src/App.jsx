import { useEffect } from "react";
import { useCallback } from "react";
import { useState,useRef } from "react"

function App() {
  const [password,setPassword]=useState("");
  const [length,setLength]=useState(8);
  const [numAllowed, setNumAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);

  //useRef hooks
  const passwordRef=useRef(null);
  const passwordGenerator=useCallback(()=>{
      let pass="";
      let str="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
      if(numAllowed) str+="0123456789";
      if(charAllowed) str+="!@#$%^&*()_+=-{}[]`~"
      for(let i=1;i<=length;i++){
        let char=Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(char);
        setPassword(pass);
      }
  },[length,numAllowed,charAllowed]);

  const copyToClipBoard=useCallback(()=>{
     passwordRef.current?.select();
     window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,setPassword]);


  return (
    <div className="w-full h-screen bg-gradient-to-r from-purple-600 via-cyan-600 to-orange-700 flex justify-center items-center">
      <div className="max-w-md mx-auto p-5 border-2 w-full backdrop-blur-sm bg-white/40 rounded-lg">
        <h2 className="text-center uppercase mb-2 tracking-wide text-white font-bold text-xl">Password Generator</h2>
        <div className="mb-2 flex flex-wrap w-full justify-center rounded-lg">
          <input
            type="text"
            value={password}
            placeholder="Password"
            ref={passwordRef}
            readOnly
            className="bg-white px-4 py-2 w-[80%] rounded-s-lg"
          />
          <button
           onClick={copyToClipBoard}
          className="bg-blue-500 w-[20%] font-bold rounded-e-lg text-white uppercase px-4 py-2">Copy</button>
        </div>
        <div className="flex gap-x-1 text-orange-700">
          <div className="flex flex-wrap gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              onChange={(e)=>setLength(e.target.value)}
            />
            <label>Length({length})</label>
          </div>
          <div className="flex flex-wrap gap-x-1">
             <input
             type="checkbox"
             defaultChecked={numAllowed}
             onChange={(e)=>setNumAllowed(e.target.value)}
             />
             <label>Numbers</label>
          </div>
          <div className="flex flex-wrap gap-x-1">
             <input
             type="checkbox"
             defaultChecked={charAllowed}
             onChange={(e)=>setCharAllowed(e.target.value)}
             />
             <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
