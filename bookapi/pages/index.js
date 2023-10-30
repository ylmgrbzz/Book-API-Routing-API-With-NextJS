import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const data = fetch("http://localhost:3000/api/hello")
    .then((response) => response.json())
    .then((data) => setName(data.name));
  return (
    <div>
      <h1>Home</h1>
      <p>{name}</p>
    </div>
  );
}
