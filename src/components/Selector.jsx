import React from "react";
import pentagon from "../assets/bg-pentagon.svg";
import Rock from "../assets/icon-rock.svg";
import Lizard from "../assets/icon-lizard.svg";
import Spock from "../assets/icon-spock.svg";
import Paper from "../assets/icon-paper.svg";
import Scissors from "../assets/icon-scissors.svg";
import { useState, useEffect } from "react";
import Selected from "./Selected";


const Selector = (props) => {
  const [sign, setSign] = useState('')
  const handleSignClick = (e) => {
    setSign(e.target.value)
  }

  const resetGame = () => {
    setSign('')
  }


  return (
    <div className="selector">
      {sign ? <div className="selected_option">
        <Selected setScore={props.setScore} resetGame={resetGame} icon={sign} />
      </div> : <><img src={pentagon} alt="" height={400} className="pentagon" />
      <div className="options">
        <section className="outer_circle_rock">
          <section className="inner_circle_rock">
            <button onClick={handleSignClick} value='rock'></button>
              <img  src={Rock} alt="rock" className="icons rock" />
          </section>
        </section>
        <section className="outer_circle_paper">
          <section className="inner_circle_paper">
            <button onClick={handleSignClick} value='paper'></button>
            <img src={Paper} alt="paper" className="icons paper" />
          </section>
        </section>
        <section className="outer_circle_spock">
          <section className="inner_circle_spock">
            <button onClick={handleSignClick} value='spock'></button>
            <img src={Spock} alt="spock" className="icons spock" />
          </section>
        </section>
        <section className="outer_circle_lizard">
          <section className="inner_circle_lizard">
            <button onClick={handleSignClick} value='lizard'></button>
            <img src={Lizard} alt="lizard" className="icons lizard" />
          </section>
        </section>
        <section className="outer_circle_scissor">
          <section className="inner_circle_scissor">
            <button onClick={handleSignClick} value='scissor'></button>
            <img src={Scissors} alt="scissor" className="icons scissor" />
          </section>
        </section>
      </div></>}
    </div>
  );
};

export default Selector;
