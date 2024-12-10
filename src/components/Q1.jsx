import { useState } from "react";

const Q1 = () => {
  const [rightList, setRightList] = useState([
    "Javascript",
    "React",
    "Angular",
    "nodejs",
    "Nestjs",
    "express",
  ]);
  const [leftList, setLeftList] = useState([]);
  const [rightSelect, setRightSelect] = useState([]);
  const [leftSelect, setLeftSelect] = useState([]);

  const checked = (e, item, isFrom) => {
    if (isFrom === "left" && e.target.checked) {
      setRightSelect([]);
      setLeftSelect((prev) => [...prev, item]);
    } else if (isFrom === "left") {
      setLeftSelect((prev) =>
        prev.filter((item) => !leftSelect.includes(item))
      );
    }
    if (isFrom === "right" && e.target.checked) {
      setLeftSelect([]);
      setRightSelect((prev) => [...prev, item]);
    } else if (isFrom === "right") {
      setRightSelect((prev) =>
        prev.filter((item) => !rightSelect.includes(item))
      );
    }
  };
  const rightArrowClicked = () => {
    setRightList((prev) => [...prev, ...leftSelect]);
    setLeftList((prev) => prev.filter((item) => !leftSelect.includes(item)));
    setLeftSelect([]);
  };
  const leftArrowClicked = () => {
    setLeftList((prev) => [...prev, ...rightSelect]);
    setRightList((prev) => prev.filter((item) => !rightSelect.includes(item)));
    setRightSelect([]);
  };
  return (
    <div>
      <h3 className="p-4">Q.1.</h3>
      <div className="w-50 flex justify-center gap-10 mt-10">
        <div className="border border-black p-5 h-80 w-60 overflow-auto">
          {leftList.map((item, i) => (
            <div key={i} className="flex gap-10 mb-2">
              <input
                type="checkbox"
                className="mt-2"
                onChange={(e) => checked(e, item, "left")}
              />
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="p-5 h-80 flex flex-col justify-center">
          <div>
            <button
              className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
              onClick={rightArrowClicked}
            >
              ----&gt;&gt;&gt;&gt;
            </button>
          </div>
          <div>
            <button
              className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 mt-2"
              onClick={leftArrowClicked}
            >
              &lt;&lt;&lt;&lt;----
            </button>
          </div>
        </div>
        <div className="border border-black p-5 h-80 w-60 overflow-auto">
          {rightList.map((item, i) => (
            <div key={i} className="flex gap-10 mb-2">
              <input
                type="checkbox"
                className="mt-2"
                onChange={(e) => checked(e, item, "right")}
              />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Q1;
