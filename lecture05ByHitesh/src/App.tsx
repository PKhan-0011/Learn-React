// import {useState} from 'react';

// function App() {

//    const [count, setCount] = useState(15);

//   function Increase(count: number){
//       // setCount(count+1);
//       // setCount(count+1);
//       // setCount(count+1); 
//       // console.log(count);

//       // agar mai aise case m leta hu like count+1 m to ye bunch m jata hai sara like ek sath hi jayega sara ka sara
//       // and data print nahi hoga pura like jo hona chaiye ye ek bar hi add karega okkh..;
//       // but in case mughe ek k badd ek addon karna hai to mughe prev hook ka use karna padega okkh!..;

//       setCount(prevCount => prevCount + 1);
//       setCount(prevCount => prevCount + 1);
//       setCount(prevCount => prevCount + 1);
//       setCount(prevCount => prevCount + 1);
//       console.log(count);

//       // ye actually prev calculate karke sara calculate karta hai okkh..! iska ans hame 19 aa jayega means agar 15 hai to okkh.
//   }

//      function Decrease(count: number){
//       if(count > 0){
//         setCount(prevCount => prevCount-1);
//         setCount(prevCount => prevCount-1);
//         setCount(prevCount => prevCount-1);
//         setCount(prevCount => prevCount-1);
//         console.log(count);
//       }
//       else{
//         return;
//       }
//   }

//   // const count = 0;

//   // function Increase(){
//   //     console.log(count+1);
//   // }

//   // function Decrease(){
//   //     console.log(count-1);
//   // }


//   return (
//     <>
//      <h1>{count}</h1>
//      <button onClick={() => Increase(count)}>Increse</button>
//      <button onClick={() =>  Decrease(count)}>Decrese</button>
//     </>
//   )
// }

// export default App;

// note: mai tughe bar bar yahi bol rha hu ki useStata ya fir koi bhi hooks hai wo 
// like ui change karne k liye hota hai matlb ui m kuch bhi change hoga wo hooks hi change kar rahe honge okkh!..;
// but ye code kaam jarrur karega logic bilkul thik hoga okh?. and ye console p bilkul thik kaam karega okkh!..;

import {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0);
   
  function Increase(count: number){
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
        // console.log(count);

        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        console.log(count)

  }

  function Decrease(count: number){
       setCount(prevCount => prevCount-1);
       console.log(count);
  }    
       

  return (
    <div>
        <h1>{count}</h1>
         <button onClick={() => Increase(count)}>Increase</button>
         <button onClick={() => Decrease(count)}>Decrease</button>
    </div>
  )
}

export default App

