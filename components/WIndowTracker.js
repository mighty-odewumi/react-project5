import { useState, useEffect } from "react";



export default function WindowTracker() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);
  
    // Add a return statement in order to prevent a memory leak as a result of the Side Effects associated with using a useEffect() function.
    return function() {
      window.removeEventListener("resize", watchWidth);
    }
    
  }, []);


  return (
    <h1>Window width is: {windowWidth}</h1>
  )
}
