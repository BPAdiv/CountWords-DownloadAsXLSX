import React from "react";

function Heading() {
  return (
    <div className=" text-center pt-[5vw] ">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
        Count words from a text to XLSX table
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl px-5 sm:px-16 xl:px-48 ">
        To count words the words and the number of each word in the text, paste
        your text into the textarea input and count it by pressing the count
        button. <br /> You will receive a table with how many words in the text
        and the number of each word in the text.
        <br /> You can download it as a excle file with the download button.
      </p>
    </div>
  );
}

export default Heading;
