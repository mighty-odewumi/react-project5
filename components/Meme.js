// import memesData from "./memeData";
import React, {useEffect, useState} from "react";


export default function Meme() {


  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "/assets/juice-wrld.png",
  });

  const [allMeme, setAllMeme] = useState([]);


  // const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = allMeme;

    const getRandomMemeArray = memesArray[Math.floor(Math.random() * memesArray.length)];

    // console.log(getRandomMemeArray);

    const randomMemeUrl = getRandomMemeArray.url;

    // console.log(randomMemeUrl);

    // setMemeImage(randomMemeUrl);

    // console.log(meme.topText);

    setMeme(prevValue => {
      return {
        ...prevValue,
        randomImage: randomMemeUrl
      }
    });
  }

  console.log(meme);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(fetchData => {
        console.log(fetchData);
        setAllMeme(fetchData.data.memes);
      });
      
    }, []
  );
 
  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prevValue => ({
      ...prevValue,
      [name]: value,
      })
    );
  }

  return (
    <div className="form-container">

        <div className="input-container">
          <input
            type="text"
            placeholder="Top text"
            className="field-1 input-field"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Bottom text"
            className="field-2 input-field"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>

        <div className="submit-btn-container">
          <input
            type="submit"
            value="Get a new meme image 📷" className="form-btn"
            onClick={getMemeImage}  
          />
        </div>

        <div className="meme">
          <img src={meme.randomImage} alt="meme" className="meme-img" />
          <h1 className="meme--text top">{meme.topText}</h1>
          <h1 className="meme--text bottom">{meme.bottomText}</h1>
        </div>
      
    </div>
  )
}
