import Game from '../Game'
import { Container } from './styles'

const GamesContainer = ({games}) => {

    return (
        <Container>
            <div className="flexbox">
                {games.map((value, index) => (
                    <Game nome={value.title} photo={value.photo_url} key={index} index={index}/>
                ))}
            </div>
        </Container>
    )
}

export default GamesContainer
