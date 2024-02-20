// keeping file format as .js only because majority of the hooks returns the javascript not jsx
// hooks can be even the simple function that is returning something

import {useEffect,useState} from 'react'

function useCurrencyInfo(currency){


    // some hooks might take argument or not but our hook is taking a argument
    // this currency value will be inr or use which we will pass to query for fetching api data

    // useState hook so that data value will be uodated in the userinterface
    
    const [data,setData] = useState({})//default value null json object to ensure app doesnt crash even if 
    // nothin is loaded 

    // when this hook will be loaded the api should be automatically called
    useEffect(()=>{
        // want to load data from the api
         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
         .then((res)=> res.json())// converting data in json format
         .then((res)= setData(res[currency])) // jo object file me data mila hai unme if usd to  ud ke object ka data fetchng
          // just fetching data we want from all the data 
         console.log(data)
        

    },
    [currency]) // dependecy array affected on change in tue currency
    // so whenever we will give new currency type the data will be loaded again  



    // returning data

    return data



}
export default useCurrencyInfo; // entire function ko return kia so now we can set currency parameter value
// has access to data  

// designed custom hook