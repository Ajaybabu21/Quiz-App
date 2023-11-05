import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of Harry Potter in the movie series?",
      answers: [
        {
          text: "Johnny Depp",
          correct: false,
        },
        {
          text: "Leonardo DiCaprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Radcliffe",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What is the capital city of France?",
      answers: [
        {
          text: "London",
          correct: false,
        },
        {
          text: "Paris",
          correct: true,
        },
        {
          text: "Rome",
          correct: false,
        },
        {
          text: "Berlin",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which planet is known as the Red Planet?",
      answers: [
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Mars",
          correct: true,
        },
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Saturn",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Who painted the Mona Lisa?",
      answers: [
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Claude Monet",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What is the chemical symbol for gold?",
      answers: [
        {
          text: "Au",
          correct: true,
        },
        {
          text: "Ag",
          correct: false,
        },
        {
          text: "Fe",
          correct: false,
        },
        {
          text: "Hg",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What is the largest mammal in the world?",
      answers: [
        {
          text: "Elephant",
          correct: false,
        },
        {
          text: "Giraffe",
          correct: false,
        },
        {
          text: "Blue Whale",
          correct: true,
        },
        {
          text: "Hippopotamus",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers: [
        {
          text: "William Shakespeare",
          correct: true,
        },
        {
          text: "Jane Austen",
          correct: false,
        },
        {
          text: "Charles Dickens",
          correct: false,
        },
        {
          text: "F. Scott Fitzgerald",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "What is the smallest prime number?",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "2",
          correct: true,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "5",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which element does 'O' represent on the periodic table?",
      answers: [
        {
          text: "Oxygen",
          correct: true,
        },
        {
          text: "Gold",
          correct: false,
        },
        {
          text: "Iron",
          correct: false,
        },
        {
          text: "Carbon",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What is the square root of 144?",
      answers: [
        {
          text: "12",
          correct: true,
        },
        {
          text: "10",
          correct: false,
        },
        {
          text: "14",
          correct: false,
        },
        {
          text: "16",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "In which year did World War I begin?",
      answers: [
        {
          text: "1914",
          correct: true,
        },
        {
          text: "1916",
          correct: false,
        },
        {
          text: "1918",
          correct: false,
        },
        {
          text: "1920",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Who painted the famous painting 'Starry Night'?",
      answers: [
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Vincent van Gogh",
          correct: true,
        },
        {
          text: "Claude Monet",
          correct: false,
        },
        {
          text: "Salvador Dali",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "What is the largest organ in the human body?",
      answers: [
        {
          text: "Liver",
          correct: false,
        },
        {
          text: "Skin",
          correct: true,
        },
        {
          text: "Heart",
          correct: false,
        },
        {
          text: "Lung",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () => [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1.000" },
      { id: 6, amount: "$ 2.000" },
      { id: 7, amount: "$ 4.000" },
      { id: 8, amount: "$ 8.000" },
      { id: 9, amount: "$ 16.000" },
      { id: 10, amount: "$ 32.000" },
      { id: 11, amount: "$ 64.000" },
      { id: 12, amount: "$ 125.000" },
      { id: 13, amount: "$ 250.000" },
      { id: 14, amount: "$ 500.000" },
      { id: 15, amount: "$ 1.000.000" },
    ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                  key={m.id}
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
