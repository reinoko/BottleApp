import type { Component } from 'solid-js';
import { createSignal } from "solid-js";
import { Card } from "solid-bootstrap";

import logo from './logo.svg';
import styles from './App.module.css';

import { Router, Route } from "@solidjs/router";

const App: Component = () => {
	const [count, setCount] = createSignal(0);

const handleClick = () => {
    setCount(count() + 1);
    console.log("Button clicked!");
    const elem = document.getElementById("level");
    //const data = await (await fetch('http://192.168.21.240/LED=OFF'));
    const data = "2.66"
    elem.setAttribute("height", -11.128(data)+182.6);
    elem.setAttribute("y",10.898(data)+19.012)
  };


  return (
  <div class="d-flex flex-wrap w-100">
  {/*[
    "Primary",

  ].map((variant, idx) => (
    <Card
      bg={variant.toLowerCase()}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
      style={{ width: "18rem" }}
      class="m-2"
    >
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>{variant} Card Title </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  ))}
   <Card
      bg={"r"}
      text={"w"}
      style={{ width: "36rem" }}
      class="m-2"
    >
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>*/
<div class="container">
  <div class="bottle">
	 <Card
      bg={"r"}
      text={"w"}
      style={{ width: "18rem" }}
      class="m-2"
    >
      <Card.Header>Header</Card.Header>
      <Card.Body>
<svg width="400px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205.39 205.39">
<rect id="level" x="57.795" y="73.382" width="63.056" height="128.785" style="stroke: rgb(0, 0, 0); fill: rgb(29, 218, 255);" rx="15"/>
  <g>
    <path style="paint-order: fill; fill-rule: evenodd;" d="M 117.235 48.544 L 117.235 42.42 C 117.235 31.637 110.991 22.851 103.309 22.851 L 99.871 22.851 L 99.871 15.446 C 99.871 6.932 94.939 5.608 88.874 5.608 C 82.815 5.608 77.882 6.932 77.882 15.446 L 77.882 22.851 L 74.131 22.851 C 66.457 22.851 60.205 31.637 60.205 42.42 L 60.205 48.44 C 56.364 52.387 54.08 58.704 54.08 65.386 L 54.08 184.404 C 54.08 195.974 60.781 205.39 69.014 205.39 L 108.329 205.39 C 116.57 205.39 123.271 195.974 123.271 184.404 L 123.271 65.386 C 123.271 58.768 121.014 52.491 117.235 48.544 Z M 74.131 27.711 L 81.333 27.711 L 81.333 15.446 C 81.333 9.602 84.717 10.468 88.874 10.468 C 93.033 10.468 96.415 9.606 96.415 15.446 L 96.415 27.711 L 103.309 27.711 C 109.081 27.711 113.784 34.31 113.784 42.42 L 113.784 47.302 L 63.663 47.302 L 63.663 42.42 C 63.663 34.31 68.357 27.711 74.131 27.711 Z M 119.82 89.471 L 119.82 112.479 L 99.467 112.479 L 99.467 117.325 L 119.82 117.325 L 119.82 138.476 L 99.467 138.476 L 99.467 143.322 L 119.82 143.322 L 119.82 166.953 L 99.467 166.953 L 99.467 171.802 L 119.82 171.802 L 119.82 184.4 C 119.82 193.297 114.66 200.541 108.327 200.541 L 69.014 200.541 C 62.683 200.541 57.528 193.301 57.528 184.4 L 57.528 65.386 C 57.528 60.114 59.379 55.172 62.474 52.148 L 114.887 52.148 C 117.976 55.172 119.82 60.115 119.82 65.386 L 119.82 84.622 L 99.466 84.622 L 99.466 89.471 L 119.82 89.471 Z"/>
  </g>
</svg>
<button onClick={handleClick}>Click me!</button>
<p>You've drunk _ mL of water today!</p>

      </Card.Body>
    </Card>
  </div>
  <div class="drank">
	 <Card
      bg={"info"}
      text={"w"}
      style={{ width: "36rem" }}
      class="m-2"
    >
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Recommended Water Intake</Card.Title>
        <Card.Text>
          THe recommended water intake for a person is 2L of water per day!        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div class="dunk">
	 <Card
      bg={"blue"}
      text={"w"}
      style={{ width: "36rem" }}
      class="m-2"
    >
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>You have a remaining 1.8L of water to drink today</Card.Title>
        <Card.Text>
          Drink another 3 bottles of water.        </Card.Text>
      </Card.Body>
    </Card>
  </div>
</div>

  }
</div>
  );

 /*return(
	<div style="margin:0px;padding:0px;overflow:hidden">
		<iframe
  src="https://my.spline.design/untitled-ac8d9a12927b7ef2aea2c5c61dec0163/"
  frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"
></iframe>
	</div>


 )*/

/*return (

    <Router>

      <Route path="/" element={<div>thang</div>} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

    </Router>

  );*/

/*
const App = (props) => (
  <>
    <h1>Site Title</h1>
    {props.children}
  </>
);

render(() => <Router root={App} />, document.getElementById("root"));
*/
};

export default App;
