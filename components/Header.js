import { useState } from "react";


export default function Header({user}) {

  return (
    <h1 className="test">Logged in as: {user}</h1>
  )
}
