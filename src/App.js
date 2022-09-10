import React, { useState } from "react";

function Greeting1() {
  const [nume] = useState("Ionut");
  return nume;
}
function Greeting2() {
  let nume = "Ana";
  return nume;
}
export default function App() {
  return (
    <>
      <Greeting1 />
      <br />
      <Greeting2 />
    </>
  );
}
