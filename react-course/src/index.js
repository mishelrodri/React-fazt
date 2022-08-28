import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard} from "./Greeting";
import Product, { Navbar } from "./Product";
import {Button} from "./Button"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  <Button text="Click me"/>
  <Button text="Pay"/>
  {/* <Button text={{text:'hola'}}/> */}
  
{/*     <UserCard
      name="Ryan Ray"
      amount={300}
      married={true}
      points={[1, 2.33]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function () {
        alert("hello");
      }}
    />

    <UserCard
      name="Mishel Rodríguez"
      amount={300}
      married={true}
      points={[1, 2.33]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function () {
        alert("hello");
      }}
    /> */}
  </>
);
