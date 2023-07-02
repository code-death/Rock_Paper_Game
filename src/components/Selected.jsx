import React from "react";
import Rock from "../assets/icon-rock.svg";
import Lizard from "../assets/icon-lizard.svg";
import Spock from "../assets/icon-spock.svg";
import Paper from "../assets/icon-paper.svg";
import Scissors from "../assets/icon-scissors.svg";
import { useState, useEffect } from "react";

const Selected = (props) => {
  const [loading, setLoading] = useState(true);
  const [houseIcon, setHouseIcon] = useState('');
  const [result, setResult] = useState(null);
  const iconArray = [[Rock, 'rock'], [Paper, 'paper'], [Scissors, 'scissor'], [Lizard, 'lizard'], [Spock, 'spock']]
  let source;
  switch (props.icon) {
    case "rock":
      source = Rock;
      break;
    case "paper":
      source = Paper;
      break;
    case "scissor":
      source = Scissors;
      break;
    case "lizard":
      source = Lizard;
      break;
    case "spock":
      source = Spock;
      break;
  }

  const checkWhoWin = (a, b) => {
let message;

    if(a === 'rock' && b != 'rock') {
        if(b === 'paper' || b === 'spock') {
            message = 'YOU LOST'
            props.setScore(-1)
        } else {
            message = 'YOU WIN'
            props.setScore(1)
        }
    } else if(a === 'paper' && b != 'paper') {
        if(b === 'scissor' || b === 'lizard') {
            message = 'YOU LOST'
            props.setScore(-1)
        } else {
            message = 'YOU WIN'
            props.setScore(1)
        }
    } else if(a === 'scissor' && b != 'scissor') {
        if(b === 'rock' || b === 'spock') {
            message = 'YOU LOST'
            props.setScore(-1)
        } else {
            message = 'YOU WIN'
            props.setScore(1)
        }
    } else if(a === 'lizard' && b != 'lizard' ) {
        if(b === 'rock' || b === 'scissor') {
            message = 'YOU LOST'
            props.setScore(-1)
        } else {
            message = 'YOU WIN'
            props.setScore(1)
        }
    } else if(a === 'spock' && b != 'spock') {
        if(b === 'lizard' || b === 'paper') {
            message = 'YOU LOST'
            props.setScore(-1)
        } else {
            message = 'YOU WIN'
            props.setScore(1)
        }
    } else {
        message = "DRAW"
        props.setScore(0)
    }

    return message
  }

  const resetTheGame = () => {
    setHouseIcon('')
    props.resetGame()
  }

  useEffect(() => {
    setLoading(true)
    let newIcon;
    setTimeout(() => {
        newIcon = iconArray[Math.floor(Math.random() * iconArray.length)]
       setHouseIcon(newIcon)
        setLoading(false)
    }, 500);
        setTimeout(() => {
            setResult(<section className="middleSection"><p className="result">{checkWhoWin(props.icon, newIcon[1])}</p>
            <button onClick={resetTheGame} className="play_again">PLAY AGAIN</button></section>)
        },1000);
    clearTimeout()
  }, [props.icon]);

  return (
    <>
      <section className="selected_left">
        <p>YOU PICKED</p>
        <section className={`selectedMove outer_circle_` + props.icon}>
          <section className={`selectedMove inner_circle_` + props.icon}>
            <img
              src={source}
              alt={`${props.icon}`}
              className={`icons ` + props.icon}
            />
          </section>
        </section>
      </section>
        {result}
      <section className="selected_right">
        <p>THE HOUSE PICKED</p>
        {loading ? (
          <div className="loadingCircle"></div>
        ) : (
          <section className={`selectedMove outer_circle_` + houseIcon[1]}>
            <section className={`selectedMove inner_circle_` + houseIcon[1]}>
              <img src={houseIcon[0]} alt="rock" className="icons rock" />
            </section>
          </section>
        )}
      </section>
    </>
  );
};

export default Selected;
