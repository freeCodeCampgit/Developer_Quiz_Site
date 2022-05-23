import QuizModal from './QuizModal';

const Questions: React.FC<{ currQuestion: { Question: string }, questionNumber: number, totalQuestions: number, modalProps: any, chooseAnswer: any, points: number, choicesArr: string[][], checkAnswer: Function}>= ({ currQuestion, questionNumber, totalQuestions, modalProps, chooseAnswer, points, choicesArr, checkAnswer }) => {
  return (
    <>
      <h1 className='quiz-heading'>{currQuestion.Question}</h1>
      <div className="quiz-text mt-4">
        <p>Question: {questionNumber}/{totalQuestions}</p>
        <p>Points: {points}</p>
      </div>

      <div className="quiz-div">
        {chooseAnswer ?
          <QuizModal {...modalProps} /> :
          <div className='w-50 quiz-answers-div'>
            {choicesArr[questionNumber - 1].map((btn: string | string[] | number , index: number) => (
              <button
                className="answers-btns"
                value={btn}
                onClick={(e) => checkAnswer(e, "value")}
                key={index}>{btn}
              </button>
            ))}
          </div>
        }
      </div>
    </>
  )
}
export default Questions;