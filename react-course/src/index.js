import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  /*Devuelve un arreglo */
  const [counter, setCounter] = useState(10);

  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >Sumar</button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >Restar</button>
      <button
        onClick={() => {
          setCounter(100);
        }}
      >Reiniciar
      </button>
    </div>
  );
}

root.render(
  <>
    <Counter />
  </>
);
