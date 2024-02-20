import { useState ,useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength] = useState(8) // default length will be 8 , using usestate because as soon as length change by
  //by seekbar it will reflect at ui and also in varible for setting password , utna length tak for loop executed

  const [numberAllowed,setNumberAllowed] = useState(false) // check box field for adding number to password or not

  const [charAllowed,setCharAllowed] = useState(false) // checkbox field for adding specialcharacter or not

  const [Password,setPassword] = useState("") // for updating password

  // use rref hook

  const passwordRef = useRef("") // no default value so null

  // copying copy to clip board
  
  const copyPasswordToClipBoard = useCallback(()=>{

    // taking refercne to manipulate someting

    passwordRef.current?.select()

    window.navigator.clipboard.writeText(Password)
    
  },[Password]) // only password affect ho rha hai

  // creating function passwords genreator
 
  const passwordgenerator = useCallback(()=>{

    // now what we want is passwordGenerator method bar bar call hoga
  // ek to screen load hone ke bad 
  // length increase karne ke bad
  // number checkbox click hone ke bad
  // special character click hone ke bad
  
  // lets optimize this bar bar calling methods so they should not renrender
  // usecallback hook = react hook that lets you cache (memory store)  function definition between re-renders
  // jitna exectue hua usko cache me rkha and age ka exectuion fir vhi se hoga
  // iski vajah se bar bar re render nhi hoga

  //usecallback(fn,dependencies) dependencies means isme chnge  hote hi yeh function cache
  // me store hoga for optimization purpose
  // inour case dependencies is numberallowed , charallowed , length inke change hote hi password regenrate ka function
  // caceh me store hoga

  // use effect will run the method

  // dependeccy me bas wohi dale jo us method se kaise na kaise related ho 



    let pass =  "" // here we will append password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"


    if(numberAllowed){
      
    // if numbersare allowed then string is number
    str += '1234567890' // means a to z plus 1 to 0 we are appending this string keep in mind 

    }
    
    if(charAllowed){

      //if special character allowed
      str += "!\#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"  

    }    

    for(let i=1;i<=length;i++){

      // take random character from string
      let charInd = Math.floor(Math.random()*str.length+1) // string ki length ke andar hi number ayega
      pass += str.charAt(charInd)

    }

    setPassword(pass) // added passwrod we created to password varaible


  },[length,numberAllowed,charAllowed])

  // two method to call the passwordgenrator methods
    // 1. onclick dalo jaha bhi call karna hai
    // 2. useEffect hook 
    // useeffect is the hook that lets us to synchronize the componenets with external system

    useEffect(()=>{
      passwordgenerator()
    },[length,charAllowed,numberAllowed,passwordgenerator])

    // useeffect = jab page reload hota hai tb call hota  fucntion and dependency change then also call
  
    // password generator is called when any of thwe dependcny provided changes
    // useeffect esecall se aise diffrenct hai ki vo change external component me reflect karega
 
    // usecallback hook dependecny array ke element change hone pe function ko  optimize way me 
    // cache me store karta hai so exectution ke liye rerender na karna pade i.e memoization
    // useeffect executes the funvction on dependecy change
    // jo ki function cache me store hai to execution beeter way
    // yeh hum direct useeefect se bhi kar skte hai



  return (

    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={Password}
            ref = {passwordRef}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            
        />
        <button  onClick={copyPasswordToClipBoard}
        
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {
          setLength(e.target.value) // setting length on range set
        }}
          />
          <label>Length: {length}</label> 
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    </>
  )

    
    
}

export default App
