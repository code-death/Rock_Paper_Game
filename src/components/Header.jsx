import React from 'react'

const Header = (props) => {
  return (
    <header>
        <section className='text'>
            <p>ROCK</p>
            <p>PAPER</p>
            <p>SCISSORS</p>
            <p>LIZARD</p>
            <p>SPOCK</p>
        </section>
        <section className='score'>
            <p>SCORE</p>
            <p className='currentScore'>{props.score}</p>
        </section>
    </header>
  )
}

export default Header