import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Root() {
  const [test, setTest] = useState(null);
  const handleClick = () => {
    axios.get("/api").then((res) => {
      setTest(res.data);
      console.log(res.data);
    });
  };

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={handleClick}>Send api request!!!</button>
      <p>{test}</p>
      <Link to="/contacts">Go to contacts</Link>
    </>
  );
}
