import React, { useRef, useState } from "react";
import { read, utils, writeFile } from "xlsx";
function WordCounter({ text, fileName }) {
  const [xlsxData, setXlsxData] = useState([]);
  const ref = useRef();
  const handleConvert = () => {
    const words = text.trim().toLowerCase().split(/\s+/);
    const wordCount = words.length;
    const wordsCounts = {};
    const data = [{ Word: "Total Words", Count: wordCount }];
    for (const word of words) {
      wordsCounts[word] = (wordsCounts[word] || 0) + 1;
    }
    Object.entries(wordsCounts).forEach(([word, count]) => {
      data.push({ Word: word, Count: count });
    });
    setXlsxData([...data]);
    setTimeout(() => {
      if (!ref.current) {
        return;
      }
      ref.current.scrollIntoView();
    }, 500);
  };
  const handleCountWord = () => {
    // const words = text.trim().split(/\s+/);
    // const wordCount = words.length;
    // const wordsCounts = {};
    // const data = [{ Word: "Total Words", Count: wordCount }];
    // for (const word of words) {
    //   wordsCounts[word] = (wordsCounts[word] || 0) + 1;
    // }
    // Object.entries(wordsCounts).forEach(([word, count]) => {
    //   data.push({ Word: word, Count: count });
    // });
    // setXlsxData([...data]);
    const sortedXlsxData = xlsxData.sort((a, b) => b.Count - a.Count);
    const ws = utils.json_to_sheet(xlsxData);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Sheet1");
    writeFile(wb, `${fileName}.xlsx`);
  };
  return (
    <div>
      <div className="flex  items-center justify-center mb-5">
        <button
          className=" text-white bg-blue-500 hover:bg-blue-600 transition-all  rounded text-lg px-5 py-2.5 w-60 mt-3  "
          onClick={handleConvert}
          type="button"
        >
          Count Words
        </button>
      </div>
      {xlsxData.length ? (
        <div className=" flex flex-col mt-10 px-[5vw] pb-[5vw]">
          <button
            className="bg-blue-500 hover:bg-blue-600 transition-all rounded px-5 py-2 text-white cursor-pointer max-sm:mx-auto ml-auto inline-flex items-center "
            onClick={handleCountWord}
          >
            <svg
              className=" w-4 h-4 mr-2 -ml-1"
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="download-arrow"
                d="M13 9L9 13M9 13L5 9M9 13V1"
                stroke="#F2F2F2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                stroke="#F2F2F2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Click here to download as XLSX
          </button>
          <div ref={ref} className="max-h-screen overflow-auto mt-5  ">
            <table className="w-full text-sm text-left text-gray-900 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200  ">
                <tr>
                  <th className="px-6 py-3 font-bold">Word</th>
                  <th className="px-6 py-3 font-bold">Count</th>
                </tr>
              </thead>
              <tbody>
                {xlsxData
                  .sort((a, b) => b.Count - a.Count)
                  .map((row, index) => {
                    return (
                      <tr className="border-b" key={index}>
                        <td className="px-6 py-4">{row.Word}</td>
                        <td className="px-6 py-4">{row.Count}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default WordCounter;
