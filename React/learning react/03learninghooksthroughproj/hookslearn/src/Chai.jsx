// function Chaai(){

//     let counter = 15

//     let AddVal = ()=>{

//          // code when buttonAdd is clicked
//          console.log('add value button is clicked');
//          counter = counter+1
//          console.log(counter);

//     }
    
    

//     let SubVal = ()=>{

//          // code which will be executed when button Sub is clicked
//          console.log('sub value buttpn is clicked')
//          counter = counter-1
//          console.log(counter);

//     }




//     return (

//         <>
        
//         <h2>Learning Hooks</h2>
//         <p>Counter Value = {counter}</p>

        

//         <button onClick={AddVal}>Add Value , Counter = {counter}</button>
//         <button onClick={SubVal}>Sub Value , Counter = {counter}</button>

//         <br/>

//         <footer>This is the footer Counter Value = {counter}</footer>

//         </>


//     );


    
// }
// export default Chaai

// // problem with this code will demonstrate the need of hooks

// // entire code is working fine and counter value is also getting updated but that updated counter value is 
// // not getting updated  in ui , user interface is not getting updated , so this is where power of react comes 
// // react will decide which part of ui will be updated , i.e react will react on variable updattion
// // ek variable update hote hi har jagah react karti hai

// // now we have the counter value at multiple ui elements if we want that all that elements counter value to 
// // be updated then by using normal javascript we have to call all this element by using getelementbyid or any 
// // other dom manipulation technique which is hectic process

// // to solve this problem react uses special methods call hooks and by using hooks only the data will be updated




// using hooks now

import { useState } from "react"; // hook



function Chaai(){
    // useState hook is responsible for changing the state, change doesnt mean value change.
    // it is used to propogate the change in ui that is change made in our dom 

    let [counter,setCounter] = useState(15) 
    
    // use state return a array  0 index = counter that will simply contain default value 15 at begining
    // default value set in  useState(15)  it can be anything array ,function true etc , setcounter is the
    // function , setcounter will control counter variable we will update counter through setcounter
    // so that the updation will also be reflected in the ui along with just variable updation

   

    let AddVal = ()=>{

         // code when buttonAdd is clicked
         console.log('add value button is clicked');
        //  counter = counter+1

        setCounter(counter+1)
        

    }
    
    

    let SubVal = ()=>{

         // code which will be executed when button Sub is clicked
        console.log('sub value buttpn is clicked')
        // setCounter(counter-1)
        // can also write

        counter = counter-1
        setCounter(counter)
        

    }




    return (

        <>
        
        <h2>Learning Hooks</h2>
        <p>Counter Value = {counter}</p>

        

        <button onClick={AddVal}>Add Value , Counter = {counter}</button>
        <button onClick={SubVal}>Sub Value , Counter = {counter}</button>

        <br/>

        <footer>This is the footer Counter Value = {counter}</footer>

        </>


    );


    
}
export default Chaai


// conclusion

// react allows us to change multiple ui componet at same time when a variable is changwed
// same thing is complex in javascript as we need referenc eof each ui element i.e by using
// get elementbyid,or anything else but react does this without taking reference react uses hook for
// this , usestate hook is use do updation of varivblr in ui , if usestate hook is not used the variable value 
// will be updated but it will not be reflected in the ui 

// as state (variable) changes the user interface also changes we are syncing state and ui by using react 