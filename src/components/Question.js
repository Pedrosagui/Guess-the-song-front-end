import Answer from "./Answer";
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import ReactAudioPlayer from 'react-audio-player';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            key={index}
            index={index}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))}
      </div>
      <ReactAudioPlayer
      src= {currentQuestion.mp3}
      autoPlay="true"
      volume="0.2"
      controls
      />
    </div>

  );
};

export default Question;
