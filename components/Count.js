export default function Count({number}) {

  if (number < 0) {
    console.log("Zero reached")

  }

  console.log("Count is rendered");
  return (
    <h1 className="test-paragraph">{number}</h1>

  )
}
