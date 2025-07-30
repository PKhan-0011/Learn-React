import {useContext} from 'react';
import UserContext from '../context/UserContext';



const Profile = () => {
    
    const {user} = useContext(UserContext);
    // yha p data hamne excess kiya hai from userContext.Provider okkh!..;

    // and iske andar user k userName and password dono hi presnet hai.. okkh abb mughe isko execess karna tha to usko setUser s le lenge..;

    if(!user){
        return <div>Please Login</div>
    }

    // in case user thik hua to return hamm uska userName kar denge okkh!.;

  return (
    <div>
          Welcome {user.userName},
    </div>
  )
}

export default Profile