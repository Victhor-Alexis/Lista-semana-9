import { Container } from './styles'

const Game = () => {
    return (
        <Container>
            <img/>

            <div className="text">
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L13 8.71428L1 16.4286V1Z" stroke="#7CA431" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <p>Title</p>
            </div>
        </Container>
    )
}

export default Game
