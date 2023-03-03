import {  useContext } from "react";
import { UserContext } from "./App";
export default function Component3() {
    const user = useContext(UserContext);
  
    return (
      <>
        <h1>Component 3</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }
