import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { data } from "../data";

function AllQuestion() {
  const [showAnswer, setShowAnswer] = useState(false);

  const clickPlus = (index) => {
    console.log("I am clicked");
    // setShowAnswer((data) => ({ ...data, [index]: !data[index] }));
    setShowAnswer((data) => {
      const newShowAnswer = { ...data };
      Object.keys(data).forEach((key) => {
        newShowAnswer[key] = false;
      });
      newShowAnswer[index] = !showAnswer[index];
      return newShowAnswer;
    });
  };

  const clickMinus = (index) => {
    console.log("I am clicked");
    // setShowAnswer((data) => ({ ...data, [index]: !data[index] }));
    setShowAnswer((data) => {
      const newShowAnswer = { ...data };
      Object.keys(data).forEach((key) => {
        newShowAnswer[key] = false;
      });
      newShowAnswer[index] = !showAnswer[index];
      return newShowAnswer;
    });
  };

  return (
    <>
      <section>
        <h1>General Question</h1>

        {data.map((each, i) => {
          const { question, answer } = each;
          return (
            <article key={i}>
              <div className="question-con">
                <p>{question}</p>
                <div className="icons-con">
                  {!showAnswer[i] && (
                    <FaPlusSquare
                      className="plus"
                      onClick={() => clickPlus(i)}
                    />
                  )}
                  {showAnswer[i] && (
                    <FaMinusSquare
                      className="minus"
                      onClick={() => clickMinus(i)}
                    />
                  )}
                </div>
              </div>
              {showAnswer[i] && <p>{answer}</p>}
            </article>
          );
        })}
      </section>
    </>
  );
}

export default AllQuestion;
