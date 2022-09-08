import React, { useState, useEffect } from "react";
import { dollarData } from "../../data";
import Dollar from "./Dollar";
import QuestionAnswers from "./QuestionAnswers";
import Start from "./../Start/Start";
import "./quiz.css";

const Quiz = () => {
  const [username, setUsername] = useState(null);
  const [question, setQuestion] = useState(1);
  const [gameFinish, setGameFinish] = useState(false);
  const [points, setPoints] = useState("$0");

  useEffect(() => {
    question > 1 &&
      setPoints(dollarData.find((d) => d.id === question - 1).dollar);
  }, [dollarData, question]);

  return (
    <>
      <div className="quiz__container">
        {username ? (
          <>
            <div className="quiz">
              {gameFinish ? (
                <h1>You earned: {points}</h1>
              ) : (
                <>
                  <QuestionAnswers
                    question={question}
                    setQuestion={setQuestion}
                    setGameFinish={setGameFinish}
                  />
                </>
              )}
            </div>
            <div className="dollar">
              <Dollar question={question} />
            </div>
          </>
        ) : (
          <Start setUsername={setUsername} />
        )}
      </div>
    </>
  );
};

export default Quiz;
