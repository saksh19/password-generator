import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  let [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const copypassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])


  
  const passwordgen=useCallback(() => {
    let pass=""
    let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str += "0123456789"
    if(char) str += "~!@#$%^&*+"
  
  for (let i = 0; i <  length; i++) {
    let char2 = Math.floor(Math.random() * str.length + 1);
        pass +=str.charAt(char2);
  }
  setPassword(pass)
  },[length,num,char,setPassword])
  useEffect(()=>{
    passwordgen()

  },[length, num,char,passwordgen])

  return (
    <> 
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-slate-700 '>
    <h2 className='text-white my-4'> password generators</h2>
 <div className=" flex-shadow rounded-lg overflow-hidden mb-4">
  
    <input type="text" value={password}
    placeholder='password'
    readOnly 
    className='outline-none w-full px-3 py-1 '
    ref={passwordRef}
    />
     <button className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0" onClick={copypassword}>copy</button>
</div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      
        <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={num}
          id="numberInput"
          onChange={() => {
              setNum((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                  setChar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      
      
      
      
  
 </div>
    </div>

      

        
  </>
    
  )}


export default App
