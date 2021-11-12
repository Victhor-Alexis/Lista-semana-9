import styled from "styled-components"

export const Container = styled.div`
    display: inline-block;
    width: 33%;
    height: 25vw;
    min-height: 22rem;
    min-width: 28rem;
    margin-left: 10%;
    background-color: #2A2A2A;

    img {
        width: 100%;
        height: 47%;
        background-color: #ccc;
    }

    div.holder {
        padding: 1.5rem 8%;
        display: flex;
        justify-content: space-between;
        
        svg {
            display: inline-block;
            margin-right: 0.5rem;
        }

        h1 {
            display: inline-block;
            font-size: 24px;
            color: white;          
        }

        p {
            color: #A9A9A9;
            font-size: 18px;
        }

        .block1 p {
            margin-left: 1.5rem;
        }
    }

    .line {
        width: 45%;
        border: 2px solid #7CA431;
        position: relative;
        top: 15%;
    }

    button {
        margin: 5% 0 0 45%;
    }
`;
