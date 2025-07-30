/* 
  *** custom hooks generally hamm use starting m laga k use karte hai..
       and last but not the least iske andar do use hooks ayengi hi agyenge okkh!..;
*/
// *** agar koi dataBase ki query ho ya kuch backend s data aa rha ho to hamm wha p actually useEffect ka use karte hai okkh!..;

import {useEffect, useState} from 'react';

import axios from 'axios';

 function useCurrencyConvertor(){
     const [apiData, setApiData] = useState({});

      //** Note: Custom hook me mai useEffect nicche hi likhunga just uske 
      //  and another is useEffect k andar bhi hamm async await ka call kar sakte hai okkh!..

      useEffect( () => {

           const fetchData = async  () => {
              try{
                   const ApiHandle = await axios.get('/api/key'); // ye jo hai ye axios hai data return karte hai instaed of response intailly..;
                   const data = ApiHandle.data;
                   console.log(data);
                   setApiData(data);
              }
              catch(err){
                 const e = err as Error;
                throw new Error("Yha p kcuh gdbd hai!", e);
              }
           }
           fetchData();
      }, []);
      return apiData;
}


export default useCurrencyConvertor



// dekh jab bhi hamm api call karte hai by a fetch or axios to hame fetch s string me data milta hai then hamm usko json m conevrt karte hai..;
// but in case of axios hame sara data hi milta json m. yha p actually json m convert nahi karna padta 

// async maine customHook m lagaya tha ye simple sa error tha okkh!..;

// ek aur imp term hai like ki hooks m async term use nahi karenge
