import QUESTIONS from "../../questions";
import style from "./style.module.css";

interface QuestionContainerProps {
  activeQuestion: number;
}

const QuestionContainer: React.FC<QuestionContainerProps> = ({ activeQuestion }) => {
  return (
    <div className={style.container}>
      <div className={style.questionsCounter}>{`${activeQuestion + 1}/${
        QUESTIONS.length
      }`}</div>
      <p>{QUESTIONS[activeQuestion].text}</p>
    </div>
  );
};

export default QuestionContainer;
