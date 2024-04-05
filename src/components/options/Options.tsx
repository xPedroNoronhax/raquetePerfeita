import style from "./style.module.css";
import QUESTIONS from "../../questions";
import { useState } from "react";
useState;

const Options = ({ activeQuestion, onSelectAnswer }) => {
  // const [actualUserAnswer, setActualUserAnswer] = useState(answer);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  function handleSelectAnswer(selectedAnswer) {
    // setActualUserAnswer(selectedAnswer);
    setSelectedAnswer(selectedAnswer);
    onSelectAnswer(selectedAnswer);
  }

  return (
    <>
      {QUESTIONS[activeQuestion].answers.map((answers) => (
        <div
          key={answers}
          className={`${style.option} ${
            selectedAnswer === answers ? style.optionSelected : ""
          }`}
          onClick={() => handleSelectAnswer(answers)}
        >
          <p>{answers}</p>
        </div>
      ))}
    </>
  );
};

export default Options;
