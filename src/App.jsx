import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([
    {name: "Leon"},
    {name: "Jordan"},
  ]);

  const handleClick = (value) => {
    console.log(value);
  };

    return (
      <div>
       <Persons name= {persons[0].name} clickMe={handleClick} />
       <Persons name= {persons[1].name} clickMe={handleClick} />
      </div>
  );
};

const Persons = (props) => {
  return (
    <h1 onClick={() => props.clickMe("HELLO THERE")}>{props.name}</h1>
  );
};

export default App;



// import { useState } from 'react'
// import './App.css'
 
// const App = () => {
// //  This is the useState HOOK
// // Adding static message
//   console.log(useState ())
//   const [persons, setPersons] = useState([
//     {name: "Leon"},
//     {name: "Jordan"}
//   ])
// }
 
//   const handleClick = () => {
//       console.log("Clickety Clack")
 
//   // Button click message function
//   // const handleClick = () => {
//   //   setMessage("You clicked the button.")
//   // }
 
//   // Button message
//   return (
//     <div>
//       <Persons name={persons[0].name} clickMe={handleClick} />
//       <Persons name={persons[1].name} clickMe={handleClick} />
//     </div>
//   );
// };
 
// const Persons = (props) => {
//   return (
//     <h1 onClick={props.clickMe}>{props.name}</h1>
//   );
// };
 
// export default App;
 