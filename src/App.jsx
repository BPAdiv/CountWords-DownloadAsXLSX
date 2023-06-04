import { useState } from "react";
import WordCounter from "./components/WordCounter/WordCounter";
import Heading from "./components/WordCounter/Heading";

function App() {
  const [textInput, setTextInput] = useState("");
  const [fileName, setFileName] = useState("example");

  return (
    <>
      <div className=" min-h-screen  ">
        <Heading />
        <div className="px-[10vw] py-[5vw] pb-0">
          <h1 className="mb-5 text-2xl text-center font-semibold">
            Enter the text you want to count below
          </h1>
          <textarea
            // rows="10"
            className="border resize-none rounded border-black w-full p-2 min-h-[50vh] "
            placeholder="Enter your text"
            type="text"
            onChange={(e) => setTextInput(e.target.value)}
          />
        </div>
        {textInput.length > 2 ? (
          <>
            {/* <input
              className="border"
              type="text"
              placeholder="Enter your text"
              onChange={(e) => setFileName(e.target.value)}
            /> */}
            <WordCounter text={textInput} fileName={fileName} />
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
