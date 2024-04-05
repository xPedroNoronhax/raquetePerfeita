import Options from "../../components/options/Options";
import QuestionContainer from "../../components/questioncontainer/QuestionContainer";

import style from "./style.module.css";
import { useState } from "react";
import QUESTIONS from "../../questions";
import NextQuesitonButton from "../../components/buttons/NextQuestionButton/NextQuestionButton";
import End from "../end/End";

interface Option {
  text: string;
  id: number;
}

interface Question {
  id:string;
  text: string;
  options?: Option[];
}

interface QuestionsProps {}

const Questions: React.FC<QuestionsProps> = () => {
  const [userAnswer, setUserAnswer] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const currentQuestionIndex = userAnswer.length;
  const quizIsComplete = currentQuestionIndex === QUESTIONS.length;

  function handleSelectedAnswer(answer: number) {
    setSelectedAnswer(answer);
    console.log("selecionou:", answer);
  }

  const getCurrentQuestion = (): Question | undefined => {
    return QUESTIONS[currentQuestionIndex];
  };

  function handleAddAnswer() {
    if (selectedAnswer !== null) {
      setUserAnswer((prevSelectedAnswer) => {
        return [...prevSelectedAnswer, selectedAnswer];
      });
      setSelectedAnswer(null);
    }
    console.log("chamando a ", userAnswer);
  }

  if (quizIsComplete) {
    console.log(userAnswer);
    return <End />;
  }

  const currentQuestion = getCurrentQuestion();

  return (
    <div className={style.container}>
      {currentQuestion && (
        <>
          <QuestionContainer activeQuestion={currentQuestionIndex} />
          
            <Options
              activeQuestion={currentQuestionIndex}
              onSelectAnswer={handleSelectedAnswer}
            />
          
          <NextQuesitonButton child="Seguir" onClick={handleAddAnswer} />
        </>
      )}
    </div>
  );
};

export default Questions;
