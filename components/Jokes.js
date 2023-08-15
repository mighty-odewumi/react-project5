import { useState } from "react";

export default function Jokes(props) {

  const [isShown, setIsShown] = useState(false);

  function handleClick() {
   
    setIsShown(prevValue => !prevValue);
  }


  // <p className="test">{`${isShown}`}</p>

  return (
    <div className="test">
      {props.setup && <h3 className="test">{props.setup}</h3>}

      {isShown && <p className="test">{props.punchline}</p>}

      
        <button onClick={handleClick}>
          {isShown ? "Hide" : "Show"} Punchline
        </button>
           
      <hr />
    </div>
  )
}
