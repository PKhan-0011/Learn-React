import {useState, useEffect} from 'react';
import { Todoprovider } from './components/Todocontext';
import type {Type} from './components/Todocontext'

function App() {

  const [todos, setTodos] = useState<Type[]>([]);

  const addTodo = (todos: string) => { 
        // yha p actually sara data pda hua hi hoga like setTodos m aur maine direct yha p value dali 
        // to delete ho jayega sara data okkh to first mughe purana data save karna padega..; purani value hamm aise put karte hai ...prev aise okkh!..
        setTodos((prev) => [ {id: Date.now(), todo:todos, completed: false}, ...prev])
  }

  const upDateTodo = (id: number, todo: string) => {
       // agr mughe upadte karna hai to uski id actally chaiye hogi..
      setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const DeleteTodo = (id: number) => {
      setTodos((prev) => prev.filter((prevTodo) => (prevTodo.id !== id)))
  }

  const ToggleComplete = (id: number) => {
       // isme acatlly mughe ui hi toggle karna padta hai okkh..
        // to todha sa id se select karo sara elemnt select ho jayega okkh!.

        setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prev, completed: !prevTodo.completed} : prevTodo));

        // yha s generally hame jo hamara data tha usko hamm true s false and false s true kar denge okkkh!..
  }


  // local storage in react setItem's and getItem's hote hai okkh!.
  // setItem's s hamm data set karte hai  key and value k form m and getItems s hamm data get karte hai.. and get karte waqt hamm only key bhi de de to data mil jayega..

  useEffect(() => {
     //localStorage.setItem("key", "value"),
      // and getItem karte waqt always hame JSON.parse use karna padega 
      
     const todos = JSON.parse(localStorage.getItem("todos"));
     console.log(todos);

     if(!todos){
        // kya pta todos hi exist nahi karta to 

        console.log("Todos exist hi nahi karta okkkh!.");
     }

     else if(todos && todos.length > 0){
          setTodos(todos);
     }
     else{
        console.log("Error bcz kya pta yha p todos to thik hai but todo.length jo hai wo kam ho!..")
     }
   }, []);

   useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));

        // dekh jab dete hai tab key and value m dete hai okkh aur value ko string's m dete hai..
        // and jab lena hota hai tab get karte time key and value's ko hamm string's m dete hai okkh!...


   }, [todos]);

   
 

   // and intution kha s bani ki mughe useEffect hi use krna hai bzc first time re-rendering hui to first time p 
   // ham isse hi use karte hai .. bcz sara data send karna hota hai first re-rendering p..


  return (
    <Todoprovider value = {{todos, addTodo, upDateTodo, DeleteTodo, ToggleComplete}}>
         <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        
                           
                          </div>
                    </div>
                </div>
           
    </Todoprovider>
  )
}

export default App

//mai context api kasie leta tha wo dekh le ek bar like ek mai components folder banata tha 
// uske andar provider leta tha etc etc..;

//   addTodo: (todo) => {},
    //  upDateTodo: (id, todo) => {},
    //  DeleteTodo: (id, todo) => {},
    //  ToggleComplete: (id) => 


    // mughe filter k logic m dikkat hoti hai.. to is condtion m actauuly hota ye hai generally ki 
    // agar id same hui to wo nahi hateyega okkh 

    // jaise normal filter man lete hai ki actaully filter method karta kya hai in generall filter m ek chai filter 
    // man lete hai jo same size ka hoga usko rakh lega baki remove kar dega.. same as yha bhi aisa hi hai.. okkh!,