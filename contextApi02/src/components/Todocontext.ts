import {createContext, useContext} from 'react';

// export type TodoContextType = {
//   todos: [];
//   addTodo: (todo: string) => void;
//   upDateTodo: (id: number, todo: string) => void;
//   DeleteTodo: (id: number, todo: string) => void;
//   ToggleComplete: (id: number) => void;
// };

// in dono m s kuch bhi du kam chal jayega okkh!..;

export interface Type {
    id: number,
    todo: string,
    completed: boolean
}
  
export const TodoContext = createContext({
     todos: [
        {
            id: 1,
            todo: 'Todo msg',
            completed: false
        }
     ],
     addTodo: (todo: string) => {
        console.log(todo);
     },
     upDateTodo: (id: number, todo: string) => {
         console.log(id, "abb user ayega", todo);
     },
     DeleteTodo: (id: number, todo: string) => {
          console.log(id, "abb user ayega", todo);
     },
     ToggleComplete: (id:number) => {
        console.log(id);
     },
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider;


export default {TodoContext, Todoprovider, useTodo};

// yha p teen step's hote hai context api likhne ke 
// first jo hota hai wo create ka hota hai.. const context = createContext(); // yha s ek tera context banta hai okkh!..;
// 2nd ka jo hai wo like ek functonality ka hota hai like ek function () => aise okkh..;
// 3rd wala jo hota hai wo Provider ka hota hia..;; const provider = useContext.Provider(); ye lelo okkh!..;




