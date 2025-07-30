
import UsercontextProvider from './context/contextProvider';
import Login from './components/login';
import Profile from './components/profile'
import './App.css'

function App() {
 

  return (
    <>
      <UsercontextProvider>
        <h1>Hi thre</h1>
         <Login />
         <Profile />
      </UsercontextProvider>
    </>
  )
}

export default App

// yha p actaully mughe UserContextprovider me dalna hota hai and iska matlb generally
// UserConetext k nadar sara data aa jata hai iska matlb ye hota hai inshot okkh!..;

// example as 
// <UserConetext>
// <context.provider>
// <contextProvider value = {{user, setUser}}>
// <contextProvider value = {{user, setUser}}>
// </context.provider>
// </UserContext>


// *** step's to create conetext api okkh!..;
// step1: userContext lena hai mughe first..; from createContext.. actaully create karna hai okkh!..;
// step2: userContext.Provider banana padega okkh.. jisme sara data presnt hoga actally!..;
// step3 sara data UserContextprovider k andar rakhna padega known as wrapinng!..;
// step4: abb yha s componnets apne bna lo like login signUp page tec wha p userContext kahi import kar lo from given folder okkh!..;
// then ye use karo like const  = useContext(UserContext); and userContext s sara data fetch kar sakte ho okkh!..;