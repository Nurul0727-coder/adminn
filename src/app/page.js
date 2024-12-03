// "use client";
// import { useState } from "react";
// import userData from "./userData";
// import Component from "./component.js";
// import React from "react";
// import "./style.css";

// export default function Home() {
//   return (
//     <div className="cardContainer">
//       {userData.map((user) => {
//         return <Component user={user} />;
//       })}
//     </div>
//   );
// }
// const Greeting = (props) => {
//   return (
//     <div>
//       Hi {props.name} {props.age}
//     </div>
//   );
// };

// export default function Page() {
//   return (
//     <>
//       <Greeting name="Nurkaeinoo" age={17} />
//       <Greeting name="Naraa" />
//     </>
//   );
// }

// function Avatar(props) {
//   return <img width={props.size} height={props.size} src={props.link} />;
// }
// export default function Profile() {
//   return (
//     <>
//       <Avatar
//         link={
//           "https://media.gq-magazine.co.uk/photos/5e442958995fbc00086126ad/16:9/w_2580%2Cc_limit/20191219-BTS-04.jpg"
//         }
//         size={300}
//       />
//       <Avatar
//         link={
//           "https://media.gq-magazine.co.uk/photos/5e442958995fbc00086126ad/16:9/w_2580%2Cc_limit/20191219-BTS-04.jpg"
//         }
//         size={200}
//       />
//       <Avatar
//         link={
//           "https://media.gq-magazine.co.uk/photos/5e442958995fbc00086126ad/16:9/w_2580%2Cc_limit/20191219-BTS-04.jpg"
//         }
//         size={250}
//       />
//     </>
//   );
// }

//+,-
// export default function Numbers() {
//   const [numbers, setNumber] = useState(0); //1

//   const addNumber = () => {
//     setNumber(numbers + 1);
//   };
//   const hasyoo = () => {
//     setNumber(numbers - 1);
//   };
//   const urjih2 = () => {
//     setNumber(numbers * 2);
//   };
//   return (
//     <div className="Numbers">
//       <button onClick={addNumber}> {numbers} Next </button>
//       <button style={{ marginLeft: "20px" }} onClick={hasyoo}>
//         {numbers}
//         {} hasah{" "}
//       </button>
//       <button style={{ marginLeft: "20px" }} onClick={urjih2}>
//         {numbers}
//         {} urjih{" "}
//       </button>
//       {/* <p>{user}</p> */}
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button onClick={openModal}>add</button>
      {isOpen && (
        <div
          style={{
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.4)",
            alignContent: "center",
          }}
        >
          <div
            style={{
              height: 500,
              width: 800,
              backgroundColor: "lightblue",
              borderRadius: 16,
              margin: "auto",
              padding: 48,
            }}
          >
            <button onClick={closeModal}>close</button>
            <input
              style={{
                width: 256,
                height: 56,
                border: "1px solid black",
                padding: 4,
              }}
              placeholder="task"
            ></input>
          </div>
        </div>
      )}
    </div>
  );
  export default function Home() {
    const [count, setCount] = useState(0);
    console.log('rendering again');
    
    useEffect((=> {
      if (count === 5) {
        console.log('You clicked 5 times');
      }
    }))

    useEffect(async() => {
      console.log('useEffect');
      const response = await fetch('https://api.thecatapi.com/v1/images/0XYvRd7oD');
      const data = await response.json();
      console.log(data);
    },[]);
    return (
      <div
        className={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}  
      >
        <button onClick={() => {
          
        }}>

        </button>
      </div>
    )
  }
}
