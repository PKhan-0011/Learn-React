import {useState} from 'react';
import './App.css'

function App() {
  const [color, setColor] = useState('black'); // iske accrding hi ui me creativety hoti hai okkh!..;

  return (
    <>
       <div style={{backgroundColor: color}} className='h-screen w-screen flex position justify-center'>

         <div className='max-w-screen m-auto rounded-lg duration-200 bg-white flex gap-2 absolute bottom-10'>
            <button onClick={() => {setColor('red')}}  >red</button>
            <button onClick={() => {setColor('green')}}>green</button>
            <button onClick={() => {setColor('blue')}}>Blue</button>
            <button onClick={() => {setColor('gray')}}>gray</button>
            <button onClick={() => {setColor('yellow')}}>Yellow</button>
            <button onClick={() => {setColor('pink')}}>pink</button>
            <button onClick={() => {setColor('purple')}}>Purple</button>
            <button onClick={() => {setColor('white')}}>white</button>
        </div>
       </div>
    </>
  )
}

export default App;

// Yha pe mughe actually ek chiz ka dhyan rakhna chaiye tha like ki style Bckground 
// usme change karung ato fi rpura 
// ui change hoga okkh!..;
