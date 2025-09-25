// import { useState } from 'react';
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0);

//   function increaseCount(){
//       setCount(count+1);
//   }

//   return (
//     <>
//       <button onClick={() => increaseCount()} className='text-2xl text-red-300 p-4 mx-2 border-2'>Count: {count}</button>
//     </>
//   )
// }

// export default App

// useState hamm use hi isliye karte hai bcz ui me change kar sake okkh!. and ek tarika ka varible bhi defineing ka hota hai okkh!..


// Abb Yha p ek todo wala logic bhi lag sakta hai..



import { useState} from 'react';
import './App.css'

export const App = () => {

 const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([
    
  ]);
   
    function getAllTodo(){
         setTodos( [...todos, todo]);
         setTodo("");
    }

  return (
     
    <>
    

    <div className="flex gap-2 items-center">
      <input type="text" 
         placeholder='enter your todo here!..'
         value = {todo}
         className="border-2"
         onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
      />
      <button onClick={() => getAllTodo()} className='border-2 '>Add Todo</button>

    </div>

    <div>
         {todos.map((data, id) => (
            
                <ul key={id}>
                     {data}
                </ul>
         ))}
    </div>
    </>
  )
}
