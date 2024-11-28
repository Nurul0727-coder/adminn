"user client";
import userData from "./userData";
import Component from "./component.js";
import React from "react";
import "./style.css";

export default function Home() {
  return (
    <div className="cardContainer">
      {userData.map((user) => {
        return <Component user={user} />;
      })}
    </div>
  );
}
const Greeting = (props) => {
  return (
    <div>
      Hi {props.name} {props.age}
    </div>
  );
};

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
