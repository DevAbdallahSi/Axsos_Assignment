import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserForm from "./components/UserForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserForm />
      <div>
        <ul></ul>
      </div>
    </>
  );
}

export default App;
