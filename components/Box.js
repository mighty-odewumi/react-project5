// import { useState } from "react"

export default function Box(props) {

  let styles = {
    backgroundColor: props.on ? "#222" : "transparent",
  }


  return (
    <div 
      className="box" 
      style={styles}
      onClick={props.toggleFunc}
    >

    </div>
  )
}


/* const [on, setOn] = useState(props.on);

  function flipBoxColor() {
    console.log(on);
    setOn(prevValue => !prevValue);
  }
 */