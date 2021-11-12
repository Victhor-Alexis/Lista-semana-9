import React from 'react'
import Button from '../Button'
import { Container } from './styles'

const SelectedGame = () => {
    return (
        <Container>
            <img/>

            <div className="holder">
                <div className="block1">
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L13 8.71428L1 16.4286V1Z" stroke="#7CA431" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <h1>Title</h1>
                    <p>Genre</p>
                </div>

                <div className="block2">
                    <h1>platform</h1>
                    <p>release_year</p>
                </div>
            </div>

            <div className="line"></div>
            
            <Button/>
            
        </Container>
    )
}

export default SelectedGame
