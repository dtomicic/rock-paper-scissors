import "./App.css";
import React, { useEffect } from "react";
import Buttons from "./Components/Buttons/Buttons";
import Header from "./Components/Header/Header";
import Rules from "./Components/Rules/Rules";
import RulesBtn from "./Components/RulesBtn/RulesBtn";

function App() {
  const [rulesOpen, setRulesOpen] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [userChoice, setUserChoice] = React.useState("");
  const [computerChoice, setComputerChoice] = React.useState("");
  const choices = ["rock", "paper", "scissors"];
  const [winner, setWinner] = React.useState("");

  const getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * 3);
    setComputerChoice(choices[randomChoice]);
  };

  const getWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      setWinner("draw");
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      setWinner("human");
      setScore(score + 1);
    } else {
      setWinner("computer");
    }
  };

  const playAgain = () => {
    setUserChoice("");
    setComputerChoice("");
    setWinner("");
  };

  useEffect(() => {
    getWinner(userChoice, computerChoice);
  }, [userChoice]);

  console.log(userChoice, computerChoice);

  return (
    <>
      <div className="container">
        <Header score={score} />
        {userChoice ? (
          <>
            <div className="score">
              <div className="pick">
                <h2>You Picked</h2>
                {userChoice === "paper" ? (
                  <div className={"outerCircle blue"}>
                    <div className={"innerCircle"}>
                      <img src="/images/icon-paper.svg" alt="paper" />
                    </div>
                  </div>
                ) : userChoice === "scissors" ? (
                  <div className={"outerCircle yellow"}>
                    <div className={"innerCircle"}>
                      <img src="/images/icon-scissors.svg" alt="scissors" />
                    </div>
                  </div>
                ) : userChoice === "rock" ? (
                  <div className={"outerCircle red"}>
                    <div className={"innerCircle"}>
                      <img src="/images/icon-rock.svg" alt="rock" />
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="pick">
                <h2>The house picked</h2>
                {computerChoice === "paper" ? (
                  <div className={"outerCircle blue"}>
                    <div className={"innerCircle"}>
                      <img src="/images/icon-paper.svg" alt="paper" />
                    </div>
                  </div>
                ) : computerChoice === "scissors" ? (
                  <div className={"outerCircle yellow"}>
                    <div className={"innerCircle"}>
                      <img src="/images/icon-scissors.svg" alt="scissors" />
                    </div>
                  </div>
                ) : computerChoice === "rock" ? (
                  <div className={"outerCircle red"}>
                    <div className={"innerCircle"}>
                      <img src="/images/icon-rock.svg" alt="rock" />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="winner">
              <h2 className="winnerText">
                {winner === "human"
                  ? "YOU WIN"
                  : winner === "computer"
                  ? "COMPUTER WINS"
                  : winner === "draw"
                  ? "DRAW"
                  : null}
              </h2>
              <button className="playAgain" onClick={() => playAgain()}>
                Play again
              </button>
            </div>
          </>
        ) : (
          <>
            <Buttons setUserChoice={setUserChoice} getComputerChoice={getComputerChoice} />
            <RulesBtn setRulesOpen={setRulesOpen} rulesOpen={rulesOpen} />
            <Rules rulesOpen={rulesOpen} setRulesOpen={setRulesOpen} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
