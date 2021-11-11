import React from 'react'
import { Container } from './styles'

const Header = () => {
    return (
        <Container>         
            <div class="play">
                <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L19.6667 13L1 25V1Z" stroke="#7CA431" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

            <ul>
                <li><a href="#">JOGOS</a></li>
                <li><a href="#">CATEGORIAS</a></li>
                <li><a href="#">PUBLISHERS</a></li>
            </ul>

            <div class="lupa">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6667 22.3333C17.5577 22.3333 22.3333 17.5577 22.3333 11.6667C22.3333 5.77563 17.5577 1 11.6667 1C5.77563 1 1 5.77563 1 11.6667C1 17.5577 5.77563 22.3333 11.6667 22.3333Z" stroke="#7CA431" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M25 25L19.2 19.2" stroke="#7CA431" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

            <div class="sp_cart">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="#7CA431" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="#7CA431" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#7CA431" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </Container>
    )
}

export default Header
