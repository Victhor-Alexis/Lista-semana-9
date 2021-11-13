import { useState } from 'react'
import { Container } from './styles'

const Game = ({nome, photo}) => {
    
    const [selected, setSelected] = useState("notSelected")

    return (
        <Container onClick={() => (setSelected("selected"))}>
            <div className={selected}>
                <img alf="capa" src={`http://localhost:3000${photo}`}/>

                <div className="text">
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L13 8.71428L1 16.4286V1Z" stroke="#7CA431" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <p>{nome}</p>
                </div>
            </div>
        </Container>
    )
}

export default Game
