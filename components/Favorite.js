import { useState } from "react";

export default function Favorite({isFilled, toggleFunc}) {
  let favorite = isFilled ? "My Favorite" : "Not my favorite";

  return (
    
    <h1 className="test" onClick={toggleFunc}>{favorite}</h1>
  )
}
