import { useState} from "react";

export default function TODO() {


  const[count, setCount]=useState(0)

  const addCount=function (){
    setCount(count+1)
    console. log("我被點了")
    
    
  }


  return (
    <>
      <div>TODO</div>
      <div>點擊次數</div>
    </>
  );
}
