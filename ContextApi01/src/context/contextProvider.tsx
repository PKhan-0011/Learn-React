import React, { type ReactNode } from 'react';
import  UserContext from './UserContext';

export interface chilrenType {
    children: ReactNode
}



const UsecontextProvider = ({children}: chilrenType) => {
   
    const [User, SetUser] = React.useState(null);

  return (
      //@ts-ignore
    <UserContext.Provider value={{User, SetUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UsecontextProvider