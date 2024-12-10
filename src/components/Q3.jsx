import { useState } from "react";
import questions from "../utils/constantQue";

const Q3 = () => {
  const [inputValue, setInputValue] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(false);
  const [reverseString, setReverseString] = useState(null);

  const checkPalindrome = () => {
    const str = inputValue.split("");
    const strArr = [];
    for (let i = inputValue.length - 1; i >= 0; i--) {
      strArr.push(str[i]);
    }
    const reversed = strArr.join("");
    setReverseString(reversed);
    setIsPalindrome(inputValue === reversed);
  };
  return (
    <div>
      <h3>{questions[2].question}</h3>
      <div className="w-full mt-28 flex justify-center">
        <input
          className="border-2 border-gray-400 rounded-md p-2"
          type="text"
          value={inputValue}
          onChange={(e) => {
            if (e.target.value === "") {
              setReverseString(null);
            }
            setInputValue(e.target.value);
          }}
        />
        <button
          onClick={checkPalindrome}
          className="border-2 border-gray-400 rounded-md p-2 ml-4"
        >
          Check
        </button>
        <button
          onClick={() => {
            setInputValue("");
            setReverseString(null);
            setIsPalindrome(false);
          }}
          className="border-2 border-gray-400 rounded-md p-2 ml-4"
        >
          Clear
        </button>
      </div>
      {reverseString && (
        <div className="mt-10 flex justify-center">
          {isPalindrome ? (
            <p className="text-green-500">
              The string is: <b className="underline">{inputValue}</b> a
              palindrome
            </p>
          ) : (
            <p className="text-red-500">
              The string is: <b className="underline">{inputValue}</b> not a
              palindrome
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Q3;
