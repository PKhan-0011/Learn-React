import { useMemo, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  
   function doubleValue(value:number){
        for(let i=0; i<1000000000; i++){}
          return value*2
   }

   let value2 = useMemo(() => doubleValue(4), []);
   

  function Increment() {
     setCount(count + 1);
  }

  return (
    <>
      <button onClick={() => Increment()}>Increse: {count}</button>
      <h1>{value2}</h1>
    </>
  )
}

export default App;

// onClick p chize re-render hota hai okkh means code dubara run hota hai okkh!..
// Mai yha p useEffect nahi lga sakta bcz ye hamm sideEffect p use karte hai only okkh!..
// but in case mughe heavy data mila hai jisse code m kuch time lag rha hai to mai wha p actaully useMemo ka use karta hu okkh..
