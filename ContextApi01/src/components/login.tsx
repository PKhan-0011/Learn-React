import { useContext, useState } from 'react'

import  UserContext from '../context/UserContext';

// type UserContextType = {
//   user: undefined; // ya specific type like: user: User | null
//   setUser: React.Dispatch<React.SetStateAction<undefined>>;
// };

const Login = () => {
   
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  // @ts-ignore
  const {setUser}= useContext(UserContext);

 // @ts-ignore
  const handleSubmit = (e) => {
      e.preventDefault(); // ye genrally hamm isliye use karte hai taki iske andar ka data kahi aur na chla jaye okkh!..;
      setUser({userName, password});
  }

  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value = {userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder='userName'
        />

        <input type="text" 
         placeholder='password'
         value = {password}
         onChange = {(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login


// kahi bhi e m error dekhe to hame genegrally ye dhyan rakhna hai ki 
// e m hamm React.FormEvent<HTMLFORMElement>


// hamne yha p jo error hai wha e me React.FormEvent<HTMLFormElement> use karte hai okkh..;
// 2nd thing like hamm setUser m hamm user: any and setUser: React.dispatch<> somthing interface banate the okkh!..;