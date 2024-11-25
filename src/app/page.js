"use client"
import Image from "next/image";
import"./style.css\

export default function Home() {
  const [count, setCount] = useState(0);
  let counter = 0;
   const handleClick = () => {
     setCount(count + 1);
  //   counter++
  //   console.log(counter)
  };
  return (
    <div>{count}
      <button onClick={handleClick}>click</button>
      <ul>{productList}</ul>
    </div>
  );
}
