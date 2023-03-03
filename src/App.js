import { useState, createContext } from "react";
import Context from './context'




const UserContext = createContext();

export default function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Context />
    </UserContext.Provider>
  );
}
export {UserContext};

