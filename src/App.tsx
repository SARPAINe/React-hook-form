import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { YouTubeForm } from "./components/YouTubeForm";
import { SecurityQuestion } from "./components/SecurityQuestion";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <div className="mx-5 my-2 bg-black text-white">
    //   <div className="bg-red-500 text-yellow-400 font-bold">
    //     React hook form
    //   </div>
    //   <img src={reactLogo} />
    //   {/* <YouTubeForm></YouTubeForm> */}
    // </div>
    <SecurityQuestion />
  );
}

export default App;
