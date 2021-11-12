import React from 'react'
import Game from '../Game'
import { Container } from './styles'

const GamesContainer = () => {
    return (
        <Container>
            <div className="flexbox">
                <Game/>
                <Game/>
                <Game/>
                <Game/>
                <Game/>
                <Game/>
            </div>
        </Container>
    )
}

export default GamesContainer
