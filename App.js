import Navbar from "./components/Navbar";
import Meme from "./components/Meme";
import React, { useEffect, useState } from "react";
// import WindowTracker from "./components/WIndowTracker";
// import Count from "./components/Count";
// import Favorite from "./components/Favorite";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import boxes from "./components/boxes";
// import Box from "./components/Box";
// import Jokes from "./components/Jokes";
// import Forms from "./components/Forms";


export default function App() {

  return (
    // <Meme />
    // <Navbar />
    // {jokeElements}
    // {thingElements}
    // <Forms />
    <div className="app-container">
      <Navbar />
      <Meme />
    </div>
  );
}

/* 
      <button>Get item</button>

      <button onClick={handlePlusClick} className="plus-btn btn">
        +
      </button>

      <Count number={count}/>
      <button onClick={handleMinusClick} className="minus-btn btn">
        -
      </button>

      const [count, setCount] = useState(0);

  function handlePlusClick() {
    setCount(prevValue => {
      return prevValue + 1;
    })
  }

  function handleMinusClick() {
    setCount(prevValue => {
      return prevValue - 1;
    })
  }

      
      */

/* let [lovesCoding, setLovesCoding] = useState(false);

  console.log(lovesCoding);

  function handleClick() {
    
    lovesCoding ? setLovesCoding(false) : setLovesCoding(true);
    // Or the above logic could be written as setLovesCoding(prevValue => !prevValue)  
  }
  
   <div className="state">
        <h1>Do I love coding?</h1>
        <p onClick={handleClick}>{lovesCoding ? "Yes" : "No"}</p>
      </div>
*/

/*  const [thingsArr, setThingsArr] = useState(["Things 1", "Things 2"]);

  const thingElements = thingsArr.map((val, index) => <p className="test-paragraph" key={index}>{val}</p>);

  // console.log(thingsArr.concat(`Things ${thingsArr.length + 1}`));

  console.log("New things array", thingsArr);

  function handleClick() {
    setThingsArr(prevArr => {
      console.log("Previous array", prevArr);
      return [...prevArr, `Things ${prevArr.length + 1}`]
      });
  } 

  <button className="add-items" onClick={handleClick}>
        Add Items
  </button>

  */

// let answer = lovesCoding ? "Yes" : "No";

/* if (lovesCoding === "Yes") {
    answer = "Yes";
  }
  else {
    answer = "No";
  } */

/* let initialNum = 0;

  const[value, setValue] = useState(initialNum);
  console.log(value);

  
  function handleMinusClick() {
    setValue(prevValue => prevValue - 1);
  }

  function handlePlusClick() {
    setValue(prevValue => prevValue + 1);
  }

*/

// let timeofDay;

/* function greetings(name) {
    const date = new Date();
    const time = date.getHours();
    console.log(time);

    if (time >= 4 && time <= 11) {
      timeofDay = "morning";
    }

    else if (time >= 12 && time <= 16) {
      timeofDay = "afternoon";
    }

    else if (time >= 17 && time <= 19) {
      timeofDay = "evening";
    }

    else {
      timeofDay = "night";
    }

    return console.log(`Good ${timeofDay}, ${name}`);
  }

  greetings("Mark"); 
*/

/* 
  const [profile, setProfile] = useState({
    lastName: "Holland",
    firstName: "John",
    email: "johnhol@none.com",
    isFavorite: true,
  });


  let favorite = profile.isFavorite ? "My Favorite" : "Not my favorite";

  function toggleFavorite() {
    setProfile(prevValue => {
      // console.log(prevValue);
      return {
      ...prevValue, 
      isFavorite: !prevValue.isFavorite,
      }
    }); 
  } 

  <Favorite isFilled={profile.isFavorite} toggleFunc={toggleFavorite}/>

  <div className="profile">
  
    <h1 className="name">{profile.firstName} {profile.lastName}</h1>
    <p>{profile.email}</p>
    <h3 onClick={toggleFavorite}>{favorite}</h3>
  </div>
*/


/* 

  // const [user, setUser] = useState("Joe");
  <Header user={user}/>
  <Body user={user}/>

*/



/* 

const [box, setBox] = useState(boxes);
  
  
  const styles = {
    backgroundColor: props.darkMode ? "#222" : "#ccc",
    borderRadius: props.darkMode ? "10px" : "20px",
  }

  // let testBoxesLength = box.length % 2 === 0 ? styles.backgroundColor = "black" : styles.backgroundColor = "blue";

  // console.log(testBoxesLength);
  // console.log(mode);

  
  const boxDisplay = box.map(val => ( 
      <Box  
        key={val.id} 
        boxId={val.id}
        on={val.on} 
        toggleFunc={() => toggleBoxColor(val.id)}
      />
    )
  );


  // What this function does is that onclick, it sets the value of the previous box array and checks if the id matches the id in the boxes array and return a new array object with the modified "on" value

  function toggleBoxColor(id) {
    setBox(prevValue => {
      return prevValue.map(value => {
        return value.id === id 
        ? {...value, on: !value.on} 
        : value
      })
    });
  }
  
  <h1 className="test">Boxes on the way!</h1>
  <div className="box-container">{boxDisplay}</div>
    

*/


/* const jokes = [
    {
      setup:"Bought my daughter a fridge for her birthday.",
      punchline:"Can't wait to see her face light up when she opens it."
    },
  
    {
      setup:"How did the hacker escape the police?",
      punchline:"He just ransomware."
    },
  
    {
      setup:"Why don't pirates travel on mountain roads?",
      punchline:"Scurvy."
    },
  
    {
      setup:"Why do bees stay in the hive during winter?",
      punchline:"Swarm"
    },

    {
      setup:"What's the best thing about Switzerland?",
      punchline:"I don't know but the flag is a big plus."
    },
  
    {
      punchline:"It's hard to explain puns to kleptomaniacs because they take things literally."
    }
  
  ];

  const jokeElements = jokes.map(joke => 
    <Jokes 
      setup={joke.setup}
      punchline={joke.punchline}
    />
  );
 */


/* 

const [messages, setMessages] = useState(["a", "b"]);

{messages.length > 0 && <h2>You have {messages.length} unread messages!</h2>} 

{
  messages.length > 0 ? 
  <h3>
    You have {messages.length} new {messages.length === 1 ? "message" : "messages"}
  </h3> 
  : <h3>You're all caught up</h3>
}

*/


/* const [starWarsData, setStarWarsData] = useState({});

  const [count, setCount] = useState(1);

  console.log("Component Rendered!");

  useEffect(() => {
      console.log("Effect function ran", count);

      fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setStarWarsData(data)
        });
    }, [count]
  );
  
  
  // <h1>{count}</h1> 
  <button onClick={() => setCount(prevValue => prevValue + 1)}>Get new character</button>

  <div>
    <pre>
      {JSON.stringify(starWarsData, null, 2)}
    </pre>
  </div>

*/


/* const [show, setShow] = useState(true);

  function toggle() {
    setShow(prevValue => !prevValue);
  }
  
  <button onClick={toggle}>Toggle Window Width</button>
      {show && <WindowTracker />}

*/

