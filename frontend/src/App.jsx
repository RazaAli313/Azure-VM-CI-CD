import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://172.190.17.228:8000/")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => setMessage("Error: " + err.message));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial", fontSize: "20px" }}>
      <h1>Frontend Connected to Backend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
