import React from "react";
import ReactDOM from "react-dom/client";

/*Elemento root == raiz, proeycto inicializado*/
const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  const married = false;

  // if (married) {
  //     return <h1>Estoy casado</h1>
  // }

//   const user = {
//     firtsName: "joe",
//     lastname: "McMilan",
//   };

function add(x,y) {
    return x+y;
}

  // covertir uun objeto a su version string
  return (
    <div>
      <h1>{add(10,30)}</h1>
    </div>
  );

  return <h1>{married ? "Estoy casado 😁" : "No estoy Casado 🙂"}</h1>;

  // return <div>
  //     <h1>Hello World</h1>
  //     <p>Lorem 123</p>
  // </div>
}

root.render(
  <div>
    <Greeting />
    <Greeting />
  </div>
);
