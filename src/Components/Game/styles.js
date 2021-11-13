import styled from "styled-components"

export const Container = styled.div`
    width: 20rem;
    height: 15rem;
    margin-bottom: 2rem;
    cursor: pointer;

    .selected{
        border: 2px solid greenyellow;
    }

    img {
        width: 100%;
        height: 80%;
        background-color: #ccc;
        max-height: 12rem;
    }

    div.text {
        display: flex;
        color: white;
        font-size: 18px;
        margin: 0.5% 0 0 7%;
        padding: 0.5rem 0;

        svg {
            margin-right: 0.4rem;
        }
    }
`;
