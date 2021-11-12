import styled from 'styled-components'

export const Container = styled.div` 
    display: inline-block;
    vertical-align: top;
    width: 37%;
    margin: 0 9rem;

    div.flexbox {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    @media screen and (max-width: 1800px) {
        display: block;
        margin: 0 auto;
        width: 100%;
        padding: 0 2%;
    }

    @media screen and (max-width: 1024px) {
        div.flexbox {
            justify-content: space-around;
        }
    }
`;
