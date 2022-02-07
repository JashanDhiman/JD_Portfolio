import { useState } from "react";
import { toast } from "react-toastify";

function App() {
  const [name, setName] = useState("");
  const func = () => {
    toast.info(`hlo ${name}`);
  };
  return (
    <>
      <h2>Student Data</h2>
      <label>
        Name <input onChange={(e) => setName(e.target.value)} />
      </label>
      <button onClick={func}>Submit</button>
    </>
  );
}

export default App;
