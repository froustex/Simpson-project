import React, { useState } from "react";
import "./style.css";
import DisplaySimpson from "./components/DisplaySimpson";
import axios from "axios";

const randomSimpson = [
  {
    quote:
      "And this is the snack holder where I can put my beverage or, if you will, cupcake.",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    characterDirection: "Right",
  },
];

export default function App() {
  const [quote, setQuote] = useState(randomSimpson);
  const API = "https://simpsons-quotes-api.herokuapp.com/quotes?count=1";

  const handleClick = () => {
    axios
      .get(API)
      .then((response) => response.data)
      .then((response) => setQuote(response));
  };

  return (
    <div className="main">
      <button onClick={handleClick}>
        Display a new quotation from a new Simpson character
      </button>
      <DisplaySimpson person={quote} />
    </div>
  );
}
