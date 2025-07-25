import {useCallback, useState, useEffect, useRef} from 'react';

function App() {
   const Passref = useRef<HTMLInputElement>(null);
  const [length, setLength] = useState(5);
  const [numberAlowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');


  // logic for password generator;
  // remeber one thing!.. jab bhi function call karenge to useCallback ka use hamnesa use karenge okkh!..;

  const passwordGenerator = useCallback( () => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numberAlowed){
            str += "0123456789";
            console.log(str);
        }

        if(charAllowed){
          str += "!@#$%^&*_-+=~?/:;.,|"
        }
        
        for(let i = 0; i<length; i++){
            const char = Math.floor(Math.random()*str.length + 1);
            // yha s ek value aa jayegi like char ki around numberic okkh!..;
              pass += str.charAt(char);
        }
        setPassword(pass);

  }, [length, numberAlowed, charAllowed]);

  // yha p password generator ko useEffect m rakhunga bcz ye infinite loop m fass sakta hai okkh!..
   
  useEffect(() => {
       passwordGenerator();
  }, [passwordGenerator]);

  function copyLink(){
      Passref.current?.select();
      Passref.current?.setSelectionRange(0, 7); // isse mai selcet karta hu apna password okkh!..; and ye kuch return nahi karta that's why hamm isko alert m nahi use kar sakte okh..;
     navigator.clipboard.writeText(password);
  }
   
  return (
    <>
     <div className='w-full mx-auto h-screen bg-blackShade flex justify-center items-center'>
      <div className='w-full max-w-[40vw] mx-auto h-[30vh] bg-whiteShade rounded-lg'>
                  
                  <div className='flex rounded-lg overflow-hidden mb-4 py-3 mx-4 gap-2'>
                        <input type="text" 
                          ref = {Passref}
                          value = {password}
                           placeholder='Pick Your Password from here!'
                            className='outline-none py-2 px-3 w-[60vw] rounded text-2xl pl-5'
                           readOnly
                        />

                        <button onClick={() => copyLink()}
                         className='bg-blue-800 text-white rounded-md p-2'
                        >Copy</button>
                  </div>

                  <div className='flex gap-5 max-w-full overflow-hidden ml-5 relative top-10 mt-5'>
                       
                       <div className='flex gap-x-2 items-center'>
                           <input type="range" 
                           value = {length}
                            min = {2}
                            max = {20}
                            onChange={(e) => {setLength(parseInt(e.target.value))}}
                       />
                       <label className='text-[1.5em] font-bold text-red-800'>length: {length}</label>
                       </div>

                       <div className='flex gap-x-2 items-center'>
                              
                            <input type="checkBox"
                              defaultChecked = {numberAlowed}
                              onChange={() => {setNumberAllowed(prev => !prev)}}
                            />
                             <label className='font-bold'>isNumberAllowed</label>
                       </div>

                       <div className='flex gap-x-2 items-center'>
                              
                            <input type="checkBox"
                              defaultChecked = {charAllowed}
                              onChange={() => {setCharAllowed(prev => !prev)}}
                            />
                             <label className='font-bold'>isCharAllowed</label>
                       </div>
                  </div>

          </div> 
     </div>
    </>
  )
}

export default App


// yha p ek functionality ati hai like ki agar ui mai kuch bhi change karna hoga to mai 
// use hook ka use karunag like useState(); etc...;